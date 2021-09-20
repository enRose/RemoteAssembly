﻿using System;
using System.Net.Http;
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
                "*/*");
            
            _client = client;
        }

        public async Task<RecaptchaResponse> Verify(string recaptchaAnswerFromClient)
        {
            var body = new StringContent(
                JsonSerializer.Serialize(new
                {
                    secret = _googleServerKey,
                    response = recaptchaAnswerFromClient
                }),
                Encoding.UTF8,
                "application/json");

            using var httpResponse = await _client.PostAsync(_uri, body);

            // throws if not 200-299
            httpResponse.EnsureSuccessStatusCode();

            using var stream = await httpResponse.Content.ReadAsStreamAsync();

            return await JsonSerializer.DeserializeAsync<RecaptchaResponse>(
                stream,
                new JsonSerializerOptions() {
                    PropertyNameCaseInsensitive = true
                });
        }
    }
}
