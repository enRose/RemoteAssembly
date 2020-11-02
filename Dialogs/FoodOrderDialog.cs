using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Schema;

namespace CoreBot.Dialogs
{
    public class FoodOrderDialog : ComponentDialog
    {
        public FoodOrderDialog() : base(nameof(FoodOrderDialog))
        {
            // These names are saved in the dialog state.
            AddDialog(new WaterfallDialog(nameof(WaterfallDialog),
                new WaterfallStep[]
                {
                    OrderLoopStepAsync,
                    ConfirmOrderStepAsync,
                    PickupTimeStepAsync,
                    CustomerNameStepAsync,
                    ConfirmStepAsync,
                    SummaryStepAsync,
                }));
            AddDialog(new TextPrompt(nameof(TextPrompt)));
            AddDialog(new NumberPrompt<int>(nameof(NumberPrompt<int>)));
            AddDialog(new ChoicePrompt(nameof(ChoicePrompt)));
            AddDialog(new ConfirmPrompt(nameof(ConfirmPrompt)));
            
            // The initial child Dialog to run.
            InitialDialogId = nameof(WaterfallDialog);
        }

        private static async Task<DialogTurnResult> OrderLoopStepAsync(
            WaterfallStepContext stepContext,
            CancellationToken cancellationToken)
        {
            var orderDetails = (OrderDetails)stepContext.Options;

            if (orderDetails.Orders == null)
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

            return await stepContext.NextAsync(
                orderDetails.Orders, cancellationToken);
        }

        private async Task<DialogTurnResult> OriginStepAsync(WaterfallStepContext stepContext, CancellationToken cancellationToken)
        {
            var bookingDetails = (BookingDetails)stepContext.Options;

            bookingDetails.Destination = (string)stepContext.Result;

            if (bookingDetails.Origin == null)
            {
                var promptMessage = MessageFactory.Text(OriginStepMsgText, OriginStepMsgText, InputHints.ExpectingInput);
                return await stepContext.PromptAsync(nameof(TextPrompt), new PromptOptions { Prompt = promptMessage }, cancellationToken);
            }

            return await stepContext.NextAsync(bookingDetails.Origin, cancellationToken);
        }
    }

    public class OrderDetails
    {
        public string Id { get; set; }

        public List<Order> Orders { get; set; }

        public string CustomerName { get; set; }

        public string CustomerPhone { get; set; }

        public string CustomerEmail { get; set; }

        public DateTime PickupTime { get; set; }

        public DateTime DateOrdered { get; set; }
    }

    public class Order
    {
        public string Name { get; set; }

        public int Quantity { get; set; }
    }
}
