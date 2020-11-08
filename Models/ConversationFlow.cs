namespace Barin.RomoteAssembly.Models
{
    public class ConversationFlow
    {
        public enum Question
        {
            Order,
            PickUpTime,
            CustomerName,
            None,
        }

        public Question LastQuestionAsked { get; set; } = Question.None;
    }
}
