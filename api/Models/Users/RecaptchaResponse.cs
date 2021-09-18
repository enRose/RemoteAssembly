using System;
namespace WebApi.Models.Users
{
    public class RecaptchaResponse
    {
        public bool Success { get; set; }
        public string Hostname { get; set; }
    }
}
