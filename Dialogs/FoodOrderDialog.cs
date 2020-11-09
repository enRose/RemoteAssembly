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
    public class FoodOrderDialog : InterruptionHandlerDialog
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

            var orderDetails = (OrderDetails)stepContext.Options;

            if (dish != null)
            {
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

            await stepContext.Context.SendActivityAsync(
                MessageFactory.Text("Sorry, I didn't understand your order. "),
                cancellationToken);

            return await stepContext.ReplaceDialogAsync(
                nameof(FoodOrderDialog), orderDetails, cancellationToken);
        }
    }
}
