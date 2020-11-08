using System;
using System.Collections.Generic;

namespace Barin.RomoteAssembly.Models
{
    public class OrderDetails
    {
        public string Id { get; set; }

        public List<Order> Orders { get; set; }

        public string CustomerName { get; set; }

        public string CustomerPhone { get; set; }

        public string CustomerEmail { get; set; }

        public DateTime PickupTime { get; set; }

        public DateTime DateOrdered { get; set; }

        public bool Done { get; set; }
    }

    public class Order
    {
        public string Name { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }
    }
}
