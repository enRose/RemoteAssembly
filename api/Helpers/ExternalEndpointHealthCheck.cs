using System;
using System.Net.NetworkInformation;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Diagnostics.HealthChecks;
using Microsoft.Extensions.Options;
using WebApi.Settings;

namespace WebApi.Helpers
{
  public class ExternalEndpointHealthCheck : IHealthCheck
  {
    private readonly RecaptchaSettings recaptchaSettings;
    private readonly string host;

    public ExternalEndpointHealthCheck(IOptions<RecaptchaSettings> options) 
    {
      recaptchaSettings = options.Value;
      host = new Uri(recaptchaSettings.HostUri).Host;
    }

    public async Task<HealthCheckResult> CheckHealthAsync(
      HealthCheckContext context,
      CancellationToken cancellationToken = default)
    {
      Ping ping = new();

      var reply = await ping.SendPingAsync(host);

      return reply.Status == IPStatus.Success ? HealthCheckResult.Healthy() : HealthCheckResult.Unhealthy();
    }
  }
}