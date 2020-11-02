using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using CoreBot.Dialogs;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Schema;
using Microsoft.Extensions.Logging;
using Microsoft.Recognizers.Text.DataTypes.TimexExpression;

namespace Barin.RomoteAssembly.Dialogs
{
    public class MainDialog : ComponentDialog
    {
        private readonly Luis luis;
        protected readonly ILogger Logger;

        public MainDialog(Luis l, BookingDialog bookingDialog, ILogger<MainDialog> logger)
            : base(nameof(MainDialog))
        {
            luis = l;
            Logger = logger;

            AddDialog(new TextPrompt(nameof(TextPrompt)));

            AddDialog(bookingDialog);

            AddDialog(new WaterfallDialog(
                nameof(WaterfallDialog), new WaterfallStep[]
            {
                IntroStepAsync,
                ActStepAsync,
                FinalStepAsync,
            }));

            // The initial child Dialog to run.
            InitialDialogId = nameof(WaterfallDialog);
        }

        private async Task<DialogTurnResult> IntroStepAsync(
            WaterfallStepContext stepContext, CancellationToken cancellationToken)
        {
            // Use the text provided in FinalStepAsync or the default
            // if it is the first time.
            var messageText = stepContext.Options?.ToString() ??
                "What can I help you with today?";

            var promptMessage = MessageFactory.Text(
                messageText, messageText, InputHints.ExpectingInput);

            return await stepContext.PromptAsync(
                nameof(TextPrompt),
                new PromptOptions { Prompt = promptMessage },
                cancellationToken);
        }

        private async Task<DialogTurnResult> ActStepAsync(
            WaterfallStepContext stepContext, CancellationToken cancellationToken)
        {
            // Call LUIS and gather any potential booking details.
            // (Note the TurnContext has the response to the prompt.)
            var luisResult = await luis.RecognizeAsync<FoodOrdering>(
                stepContext.Context, cancellationToken);

            switch (luisResult.TopIntent().intent)
            {
                case FoodOrdering.Intent.RestaurantOrder:
                    
                    return await stepContext.BeginDialogAsync(
                        nameof(BookingDialog),
                        new OrderDetails(){},
                        cancellationToken);

                case FoodOrdering.Intent.BookFlight:
                    await ShowWarningForUnsupportedCities(
                        stepContext.Context, luisResult, cancellationToken);

                    // Initialize BookingDetails with any entities
                    // we may have found in the response.
                    var bookingDetails = new BookingDetails()
                    {
                        // Get destination and origin from the composite entities arrays.
                        Destination = luisResult.ToEntities.Airport,
                        Origin = luisResult.FromEntities.Airport,
                        TravelDate = luisResult.TravelDate,
                    };

                    // Run the BookingDialog giving it whatever details we have
                    // from the LUIS call, it will fill out the remainder.
                    return await stepContext.BeginDialogAsync(
                        nameof(BookingDialog), bookingDetails, cancellationToken);

                case FoodOrdering.Intent.GetWeather:
                    // We haven't implemented the GetWeatherDialog so we just display a TODO message.
                    var getWeatherMessageText = "TODO: get weather flow here";
                    var getWeatherMessage = MessageFactory.Text(getWeatherMessageText, getWeatherMessageText, InputHints.IgnoringInput);
                    await stepContext.Context.SendActivityAsync(getWeatherMessage, cancellationToken);
                    break;

                default:
                    // Catch all for unhandled intents
                    var didntUnderstandMessageText = $"Sorry, I didn't get that. " +
                        $"Please try asking in a different way (intent was " +
                        $"{luisResult.TopIntent().intent})";

                    var didntUnderstandMessage = MessageFactory.Text(
                        didntUnderstandMessageText,
                        didntUnderstandMessageText,
                        InputHints.IgnoringInput);

                    await stepContext.Context.SendActivityAsync(
                        didntUnderstandMessage, cancellationToken);
                    break;
            }

            return await stepContext.NextAsync(null, cancellationToken);
        }

        private async Task<DialogTurnResult> FinalStepAsync(WaterfallStepContext stepContext, CancellationToken cancellationToken)
        {
            // If the child dialog ("BookingDialog") was cancelled,
            // the user failed to confirm or if the intent wasn't BookFlight
            // the Result here will be null.
            if (stepContext.Result is BookingDetails result)
            {
                // Now we have all the booking details call the booking service.

                // If the call to the booking service was successful tell the user.

                var timeProperty = new TimexProperty(result.TravelDate);

                var travelDateMsg = timeProperty.ToNaturalLanguage(DateTime.Now);

                var messageText = $"I have you booked to {result.Destination} " +
                    $"from {result.Origin} on {travelDateMsg}";

                var message = MessageFactory.Text(
                    messageText, messageText, InputHints.IgnoringInput);

                await stepContext.Context.SendActivityAsync(message, cancellationToken);
            }

            // Restart the main dialog with a different message the second time around
            var promptMessage = "What else can I do for you?";

            return await stepContext.ReplaceDialogAsync(
                InitialDialogId, promptMessage, cancellationToken);
        }

        // Shows a warning if the requested From or To cities are recognized as
        // entities but they are not in the Airport entity list.
        // In some cases LUIS will recognize the From and To composite entities
        // as a valid cities but the From and To Airport values
        // will be empty if those entity values can't be mapped to a canonical
        // item in the Airport.
        private static async Task ShowWarningForUnsupportedCities(ITurnContext context, FoodOrdering luisResult, CancellationToken cancellationToken)
        {
            var unsupportedCities = new List<string>();

            var fromEntities = luisResult.FromEntities;
            if (!string.IsNullOrEmpty(fromEntities.From) && string.IsNullOrEmpty(fromEntities.Airport))
            {
                unsupportedCities.Add(fromEntities.From);
            }

            var toEntities = luisResult.ToEntities;
            if (!string.IsNullOrEmpty(toEntities.To) && string.IsNullOrEmpty(toEntities.Airport))
            {
                unsupportedCities.Add(toEntities.To);
            }

            if (unsupportedCities.Any())
            {
                var messageText = $"Sorry but the following airports are not supported: {string.Join(',', unsupportedCities)}";
                var message = MessageFactory.Text(messageText, messageText, InputHints.IgnoringInput);
                await context.SendActivityAsync(message, cancellationToken);
            }
        }
    }
}
