using System;
using System.Text.Json.Serialization;

namespace WebApi.Models.Users
{
    public class RecaptchaResponse
    {
        public bool Success { get; set; }

        [JsonPropertyName("challenge_ts")]
        public string ChallengeTs { get; set; }

        public string Hostname { get; set; }

        [JsonPropertyName("error-codes")]
        public string[] ErrorCodes { get; set; } 
    }
}
