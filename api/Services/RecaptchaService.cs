using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using WebApi.Models.Users;
using WebApi.Settings;

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
        private readonly RecaptchaSettings settings;

        public RecaptchaService(HttpClient client, IOptions<RecaptchaSettings> options)
        {
            settings = options.Value;

            _uri = new Uri(settings.HostUri);

            client.BaseAddress = _uri;

            client.DefaultRequestHeaders.Add("Accept", "*/*");

            _client = client;
        }

        public async Task<RecaptchaResponse> Verify(string recaptchaAnswerFromClient)
        {
            var httpResponse = await _client.PostAsync(
                $"{settings.HostUri}?" +
                $"secret={settings.ServerKey}&response={recaptchaAnswerFromClient}",
                null
                );

            httpResponse.EnsureSuccessStatusCode();

            using var stream = await httpResponse.Content.ReadAsStreamAsync();

            return await JsonSerializer.DeserializeAsync<RecaptchaResponse>(
                stream,
                new JsonSerializerOptions()
                {
                    PropertyNameCaseInsensitive = true
                });
        }
    }
}
