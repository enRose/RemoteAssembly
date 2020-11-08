using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Barin.RomoteAssembly.Models;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Schema;
using Microsoft.Extensions.Logging;

namespace Barin.RomoteAssembly.Dialogs
{
    // Main dialog is where we handle different user intents e.g. inquiring
    // about the menu, inquiring opening hours, ordering dishes, feedback, etc.
    //
    // Once the intent is identified, we then start an appropriate dialog to
    // to handle it.
    //
    // Inside each dialog, it will hanle its specific user interruptions, errors,
    // deviations, etc. which are related to its intent.
    public class MainDialog : ComponentDialog
    {
        private readonly Luis luis;
        protected readonly ILogger Logger;

        public MainDialog(
            Luis l, FoodOrderDialog foodOrderDialog, ILogger<MainDialog> logger)
            : base(nameof(MainDialog))
        {
            luis = l;
            Logger = logger;

            AddDialog(new TextPrompt(nameof(TextPrompt)));

            AddDialog(foodOrderDialog);

            AddDialog(new WaterfallDialog(
                nameof(WaterfallDialog), new WaterfallStep[]
            {
                IntroStepAsync,
                ActStepAsync,
                //FinalStepAsync,
            }));

            // The initial child Dialog to run.
            InitialDialogId = nameof(WaterfallDialog);
        }

        private async Task<DialogTurnResult> IntroStepAsync(
            WaterfallStepContext stepContext,
            CancellationToken cancellationToken)
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
            WaterfallStepContext stepContext,
            CancellationToken cancellationToken)
        {
            var luisResult = await luis.RecognizeAsync<FoodOrdering>(
                stepContext.Context, cancellationToken);

            switch (luisResult.TopIntent().intent)
            {
                case FoodOrdering.Intent.RestaurantOrder:
                    
                    return await stepContext.BeginDialogAsync(
                        nameof(FoodOrderDialog),
                        new OrderDetails() { },
                        cancellationToken);

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

        //private async Task<DialogTurnResult> FinalStepAsync(
        //    WaterfallStepContext stepContext,
        //    CancellationToken cancellationToken)
        //{
        //    // If the child dialog ("BookingDialog") was cancelled,
        //    // the user failed to confirm or if the intent wasn't BookFlight
        //    // the Result here will be null.
        //    if (stepContext.Result is OrderDetails result)
        //    {
        //        var timeProperty = new TimexProperty(result.TravelDate);

        //        var travelDateMsg = timeProperty.ToNaturalLanguage(DateTime.Now);

        //        var messageText = $"I have you booked to {result.Destination} " +
        //            $"from {result.Origin} on {travelDateMsg}";

        //        var message = MessageFactory.Text(
        //            messageText, messageText, InputHints.IgnoringInput);

        //        await stepContext.Context.SendActivityAsync(message, cancellationToken);
        //    }

        //    // Restart the main dialog with a different message the second time around
        //    var promptMessage = "Your order is confirmed.  " +
        //        "You should receive an email shortly.";

        //    return await stepContext.ReplaceDialogAsync(
        //        InitialDialogId, promptMessage, cancellationToken);
        //}
    }
}
