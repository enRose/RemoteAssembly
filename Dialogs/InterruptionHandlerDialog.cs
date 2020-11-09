using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Schema;

namespace Barin.RomoteAssembly.Dialogs
{
    public class InterruptionHandlerDialog : ComponentDialog
    {
        public InterruptionHandlerDialog(string id) : base(id)
        {
        }

        protected override async Task<DialogTurnResult> OnContinueDialogAsync(
            DialogContext dialogContext,
            CancellationToken cancellationToken = default)
        {
            var result = await InterruptAsync(dialogContext, cancellationToken);

            if (result != null)
            {
                return result;
            }

            return await base.OnContinueDialogAsync(
                dialogContext, cancellationToken);
        }

        private async Task<DialogTurnResult> InterruptAsync(
            DialogContext innerDc,
            CancellationToken cancellationToken)
        {
            if (innerDc.Context.Activity.Type == ActivityTypes.Message)
            {
                var text = innerDc.Context.Activity.Text.ToLowerInvariant();

                // TODO: hit luis to identify intent.

                switch (text)
                {
                    case "menu":
                    case "?":
                        var helpMessage = MessageFactory.Text(
                            "menu link", "menu link", InputHints.ExpectingInput);

                        await innerDc.Context.SendActivityAsync(
                            helpMessage, cancellationToken);

                        return new DialogTurnResult(DialogTurnStatus.Waiting);

                    case "cancel":
                    case "quit":
                        var cancelMessage = MessageFactory.Text(
                            "Cancelling...", "Cancelling...",
                            InputHints.IgnoringInput);

                        await innerDc.Context.SendActivityAsync(
                            cancelMessage, cancellationToken);

                        return await innerDc.CancelAllDialogsAsync(
                            cancellationToken);
                }
            }

            return null;
        }
    }
}
