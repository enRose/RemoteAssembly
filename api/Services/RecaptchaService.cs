using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using WebApi.Models.Users;

namespace WebApi.Services
{
    public interface IRecaptchaService
    {
        Task<RecaptchaResponse> Verify(string recaptchaAnswerFromClient);
    }

    public class RecaptchaService : IRecaptchaService
    {
        private readonly HttpClient _client;
        private readonly Uri _uri;
        private readonly string _googleServerKey = "";

        public RecaptchaService(HttpClient client)
        {
            _uri = new Uri("https://www.google.com/recaptcha/api/siteverify");

            client.BaseAddress = _uri;
            client.DefaultRequestHeaders.Add("Accept",
                "application/json");
            client.DefaultRequestHeaders.Add("Content-Type",
                "application/x-www-form-urlencoded; charset=utf-8");

            _client = client;
        }

        public async Task<RecaptchaResponse> Verify(string recaptchaAnswerFromClient)
        {
            //var body = new StringContent(
            //    JsonSerializer.Serialize(new {
            //        secret = _googleServerKey,
            //        response = recaptchaAnswerFromClient
            //    }),
            //    Encoding.UTF8,
            //    "application/json");

            using var httpResponse = await _client.PostAsJsonAsync(_uri, new
            {
                secret = _googleServerKey,
                response = recaptchaAnswerFromClient
            });

            // throws if not 200-299
            httpResponse.EnsureSuccessStatusCode();
        }
    }
}
