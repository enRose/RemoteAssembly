﻿using BCryptNet = BCrypt.Net.BCrypt;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WebApi.Authorization;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Services;
using System;
using WebApi.Settings;

namespace WebApi
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        // add services to the DI container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<DataContext>();
            services.AddCors();
            services.AddControllers().AddJsonOptions(x => x.JsonSerializerOptions.IgnoreNullValues = true);
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            // configure strongly typed settings object
            services.Configure<AppSettings>(Configuration.GetSection("AppSettings"));
            services.Configure<RecaptchaSettings>(Configuration.GetSection(nameof(RecaptchaSettings)));

            // configure DI for application services
            services.AddHttpClient<RecaptchaService>();
            services.AddScoped<IJwtUtils, JwtUtils>();
            services.AddScoped<IUserService, UserService>();

            services.AddHealthChecks()
                .AddCheck<ExternalEndpointHealthCheck>("GoogleRecaptcha");
        }

        // configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, DataContext context)
        {
            createTestUser(context);

            app.UseRouting();
 
            // global cors policy
            // The allow origin access control http header returned when using
            // this method contains the origin that sent the request, not a wildcard,
            // e.g.Access - Control - Allow - Origin: http://localhost:3000
            var corsOriginAllowed = new[] { "localhost:3000" };

            app.UseCors(x => x
                .SetIsOriginAllowed(origin => true)
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());

            // global error handler
            app.UseMiddleware<ErrorHandlerMiddleware>();

            // custom jwt auth middleware
            app.UseMiddleware<JwtMiddleware>();

            app.UseEndpoints(x => 
            {
                x.MapControllers();
                x.MapHealthChecks("/health");
            });
        }

        private void createTestUser(DataContext context)
        {
            // add hardcoded test user to db on startup
            var testUser = new User
            {
                FirstName = "Test",
                LastName = "User",
                Username = "test",
                PasswordHash = BCryptNet.HashPassword("test")
            };
            context.Users.Add(testUser);
            context.SaveChanges();
        }
    }
}
