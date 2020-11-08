
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;

namespace Barin.RomoteAssembly.Models
{
    public class Restaurant
    {
        public RestaurantDetails GetDetails(string name)
        {
            using var stream = GetType().Assembly
                .GetManifestResourceStream(
                $"RemoteAssembly.Res.{name}.json");

            using var reader = new StreamReader(stream);

            var j = reader.ReadToEnd();

            return JsonConvert.DeserializeObject<RestaurantDetails>(j);
        }    
    }

    public class RestaurantDetails
    {
        public string Restaurant { get; set; }
        public Address Address { get; set; }
        public List<Dish> Menu { get; set; }
    }

    public class Address
    {
        public string Street { get; set; }
        public string City { get; set; }
        public string Postcode { get; set; }
    }

    public class Dish
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
    }
}
