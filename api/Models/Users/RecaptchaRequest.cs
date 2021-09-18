using System;
using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Users
{
    public class RecaptchaRequest
    {
        [Required]
        public string RecaptchaAnswerFromClient { get; set; }
    }
}
