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

    public ExternalEndpointHealthCheck(IOptions<RecaptchaSettings> options) 
    {
      recaptchaSettings = options.Value;
    }

    public async Task<HealthCheckResult> CheckHealthAsync(
      HealthCheckContext context,
      CancellationToken cancellationToken = default)
    {
      Ping ping = new();

      var reply = await ping.SendPingAsync(recaptchaSettings.HostUri);

      return reply.Status == IPStatus.Success ? HealthCheckResult.Healthy() : HealthCheckResult.Unhealthy();
    }
  }
}