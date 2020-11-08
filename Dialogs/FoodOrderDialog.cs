using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Barin.RomoteAssembly.Models;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Dialogs.Choices;
using Microsoft.Bot.Schema;

namespace Barin.RomoteAssembly.Dialogs
{
    public class FoodOrderDialog : ComponentDialog
    {
        public FoodOrderDialog() : base(nameof(FoodOrderDialog))
        {
            // These names are saved in the dialog state.
            AddDialog(new WaterfallDialog(nameof(WaterfallDialog),
                new WaterfallStep[]
                {
                    Start,
                    
                }));
            AddDialog(new TextPrompt(nameof(TextPrompt)));
            AddDialog(new NumberPrompt<int>(nameof(NumberPrompt<int>)));
            AddDialog(new ChoicePrompt(nameof(ChoicePrompt)));
            AddDialog(new ConfirmPrompt(nameof(ConfirmPrompt)));
            
            // The initial child Dialog to run.
            InitialDialogId = nameof(WaterfallDialog);
        }

        private static async Task<DialogTurnResult> Start(
            WaterfallStepContext stepContext,
            CancellationToken cancellationToken)
        {
            var foodToOrderText = "What would you like to order?";

            var promptMessage = MessageFactory.Text(
                foodToOrderText,
                foodToOrderText,
                InputHints.ExpectingInput);

            return await stepContext.PromptAsync(
                nameof(TextPrompt),
                new PromptOptions { Prompt = promptMessage },
                cancellationToken);
        }

        private static async Task<DialogTurnResult> OrderStep(
            WaterfallStepContext stepContext,
            CancellationToken cancellationToken)
        {
            var nameOfDish = (string)stepContext.Result;

            var dish = OrderValidator.Find(nameOfDish);

            if (dish != null)
            {
                var orderDetails = (OrderDetails)stepContext.Options;

                orderDetails.Orders ??= new List<Order>();

                orderDetails.Orders.Add(new Order {
                    Name = dish.Name,
                    Price = dish.Price,
                });

                return await stepContext.BeginDialogAsync(
                    nameof(OrderLoopDialog),
                    orderDetails,
                    cancellationToken);
            }
            
            var promptOptions = new PromptOptions
            {
                Prompt = MessageFactory.Text("Sorry, I don't understand you order. " +
                        "Would you like to see the menu?"),

                RetryPrompt = MessageFactory.Text("Please choose an option."),

                Choices = ChoiceFactory.ToChoices(new List<string>
                {
                    "Yes, see the menu please",
                    "Continue with ordering please",
                    "No, I would like to cancel this order"
                }),
            };

            return await stepContext.PromptAsync(
                nameof(ChoicePrompt), promptOptions, cancellationToken);
        }

        private async Task<DialogTurnResult> SeeMenuOrContinueOrdering(
            WaterfallStepContext stepContext,
            CancellationToken cancellationToken)
        {
            var orderDetails = (OrderDetails)stepContext.Options;
            var choice = (FoundChoice)stepContext.Result;
            var done = choice.Value == "No, I would like to cancel this order";

            if (done)
            {
                return await stepContext.EndDialogAsync(
                    orderDetails, cancellationToken);
            }

            if (choice.Value == "Yes, see the menu please")
            {
                
            }

            return await stepContext.ReplaceDialogAsync(
                nameof(FoodOrderDialog), orderDetails, cancellationToken);
        }

        protected override async Task<DialogTurnResult> OnContinueDialogAsync(
            DialogContext innerDc,
            CancellationToken cancellationToken = default)
        {
            var result = await InterruptAsync(innerDc, cancellationToken);
            if (result != null)
            {
                return result;
            }

            return await base.OnContinueDialogAsync(innerDc, cancellationToken);
        }

        private async Task<DialogTurnResult> InterruptAsync(
            DialogContext innerDc,
            CancellationToken cancellationToken)
        {
            if (innerDc.Context.Activity.Type == ActivityTypes.Message)
            {
                var text = innerDc.Context.Activity.Text.ToLowerInvariant();

                switch (text)
                {
                    case "help":
                    case "?":
                        var helpMessage = MessageFactory.Text(
                            HelpMsgText, HelpMsgText, InputHints.ExpectingInput);
                        await innerDc.Context.SendActivityAsync(
                            helpMessage, cancellationToken);
                        return new DialogTurnResult(DialogTurnStatus.Waiting);

                    case "cancel":
                    case "quit":
                        var cancelMessage = MessageFactory.Text(
                            CancelMsgText, CancelMsgText, InputHints.IgnoringInput);
                        await innerDc.Context.SendActivityAsync(
                            cancelMessage, cancellationToken);
                        return await innerDc.CancelAllDialogsAsync(cancellationToken);
                }
            }

            return null;
        }
    }
}
