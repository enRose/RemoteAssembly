using System;
using Microsoft.Bot.Builder.Dialogs;

namespace Barin.RomoteAssembly.Dialogs
{
    public class OrderLoopDialog : ComponentDialog
    {
        public OrderLoopDialog() : base(nameof(OrderLoopDialog))
        {
            AddDialog(new ChoicePrompt(nameof(ChoicePrompt)));

            AddDialog(new WaterfallDialog(nameof(WaterfallDialog),
                new WaterfallStep[]
                {
                    SelectionStepAsync,
                    LoopStepAsync,
                }));

            InitialDialogId = nameof(WaterfallDialog);
        }
    }
}
