﻿// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

using System.Collections.Generic;
using System.IO;
using Microsoft.Bot.Builder.Dialogs;
using Microsoft.Bot.Builder.Dialogs.Adaptive;
using Microsoft.Bot.Builder.Dialogs.Adaptive.Input;
using Microsoft.Bot.Builder.Dialogs.Adaptive.Actions;
using Microsoft.Bot.Builder.Dialogs.Adaptive.Conditions;
using Microsoft.Bot.Builder.Dialogs.Adaptive.Templates;
using Microsoft.Bot.Builder.Dialogs.Adaptive.Generators;
using Microsoft.Bot.Builder.LanguageGeneration;
using Microsoft.Bot.Builder.AI.Luis;
using Microsoft.Extensions.Configuration;
using System;
using AdaptiveExpressions.Properties;

namespace Microsoft.BotBuilderSamples
{
    public class AddToDoDialog : ComponentDialog
    {
        private static IConfiguration Configuration;

        public AddToDoDialog(IConfiguration configuration)
            : base(nameof(AddToDoDialog))
        {
            Configuration = configuration;
            string[] paths = { ".", "Dialogs", "AddToDoDialog", "AddToDoDialog.lg" };
            string fullPath = Path.Combine(paths);
            // Create instance of adaptive dialog. 
            var AddToDoDialog = new AdaptiveDialog(nameof(AdaptiveDialog))
            {
                Generator = new TemplateEngineLanguageGenerator(Templates.ParseFile(fullPath)),
                // Create and use a LUIS recognizer on the child
                // Each child adaptive dialog can have its own recognizer. 
                Recognizer = CreateLuisRecognizer(),
                Triggers = new List<OnCondition>()
                {
                    new OnBeginDialog() 
                    {
                        Actions = new List<Dialog>()
                        {
                            // Take todo title if we already have it from root dialog's LUIS model.
                            // There is one LUIS application for this bot. So any entity captured by the rootDialog
                            // will be automatically available to child dialog.
                            // @EntityName is a short-hand for turn.recognized.entities.<EntityName>. Other useful short-hands are 
                            //     #IntentName is a short-hand for turn.intents.<IntentName>
                            //     $PropertyName is a short-hand for dialog.<PropertyName>
                            new SetProperties()
                            {
                                Assignments = new List<PropertyAssignment>()
                                {
                                    new PropertyAssignment()
                                    {
                                        Property = "dialog.itemTitle",
                                        Value = "=@itemTitle"
                                    },
                                    new PropertyAssignment()
                                    {
                                        Property = "dialog.listType",
                                        Value = "=@listType"
                                    }
                                }
                            },
                            // TextInput by default will skip the prompt if the property has value.
                            new TextInput()
                            {
                                Property = "dialog.itemTitle",
                                Prompt = new ActivityTemplate("${GetItemTitle()}"),
                                // This entity is coming from the local AddToDoDialog's own LUIS recognizer.
                                // This dialog's .lu file is under ./AddToDoDialog.lu
                                Value = "=@itemTitle",
                                // Allow interruption if we do not have an item title and have a super high confidence classification of an intent.
                                AllowInterruptions = "!@itemTitle && turn.recognized.score >= 0.7"
                            },
                            // Get list type
                            new TextInput()
                            {
                                Property = "dialog.listType",
                                Prompt = new ActivityTemplate("${GetListType()}"),
                                Value = "=@listType",
                                AllowInterruptions = "!@listType && turn.recognized.score >= 0.7",
                                Validations = new List<BoolExpression>()
                                {
                                    // Verify using expressions that the value is one of todo or shopping or grocery
                                    "contains(createArray('todo', 'shopping', 'grocery'), toLower(this.value))",
                                },
                                OutputFormat = "=toLower(this.value)",
                                InvalidPrompt = new ActivityTemplate("${GetListType.Invalid()}"),
                                MaxTurnCount = 2,
                                DefaultValue = "todo",
                                DefaultValueResponse = new ActivityTemplate("${GetListType.DefaultValueResponse()}")
                            },
                            // Add the new todo title to the list of todos. Keep the list of todos in the user scope.
                            new EditArray()
                            {
                                ItemsProperty = "user.lists[dialog.listType]",
                                ChangeType = EditArray.ArrayChangeType.Push,
                                Value = "=dialog.itemTitle"
                            },
                            new SendActivity("${AddItemReadBack()}")
                            // All child dialogs will automatically end if there are no additional steps to execute. 
                            // If you wish for a child dialog to not end automatically, you can set 
                            // AutoEndDialog property on the Adaptive Dialog to 'false'
                        }
                    },
                    // Although root dialog can handle this, this will match loacally because this dialog's .lu has local definition for this intent. 
                    new OnIntent("Help")
                    {
                        Actions = new List<Dialog>()
                        {
                            new SendActivity("${HelpAddItem()}")
                        }
                    },
                    // Shows how to use dialog event to capture intent recognition event for more than one intent.
                    // Alternate to this would be to add two separate OnIntent events.
                    // This ensures we set any entities recognized by these two intents.
                    new OnDialogEvent()
                    {
                        Event = AdaptiveEvents.RecognizedIntent,
                        Condition = "#GetItemTitle || #GetListType",
                        Actions = new List<Dialog>()
                        {
                            new SetProperties()
                            {
                                Assignments = new List<PropertyAssignment>()
                                {
                                    new PropertyAssignment()
                                    {
                                        Property = "dialog.itemTitle",
                                        Value = "=@itemTitle"
                                    },
                                    new PropertyAssignment()
                                    {
                                        Property = "dialog.listType",
                                        Value = "=@listType"
                                    }
                                }
                            }
                        }
                    }
                }
            };

            // Add named dialogs to the DialogSet. These names are saved in the dialog state.
            AddDialog(AddToDoDialog);

            // The initial child Dialog to run.
            InitialDialogId = nameof(AdaptiveDialog);
        }

        private static Recognizer CreateLuisRecognizer()
        {
            if (string.IsNullOrEmpty(Configuration["luis:AddToDoDialog_en_us_lu"]) || string.IsNullOrEmpty(Configuration["LuisAPIKey"]) || string.IsNullOrEmpty(Configuration["LuisAPIHostName"]))
            {
                throw new Exception("Your AddToDoDialog's LUIS application is not configured for AddToDoDialog. Please see README.MD to set up a LUIS application.");
            }
            return new LuisAdaptiveRecognizer()
            {
                Endpoint = Configuration["LuisAPIHostName"],
                EndpointKey = Configuration["LuisAPIKey"],
                ApplicationId = Configuration["luis:AddToDoDialog_en_us_lu"]
            };
        }
    }
}
