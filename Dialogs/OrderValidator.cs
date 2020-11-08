using System;
using Barin.RomoteAssembly.Models;

namespace Barin.RomoteAssembly.Dialogs
{
    public class OrderValidator
    {
        public static RestaurantDetails RestaurantDetails =>
            new Restaurant().GetDetails("restaurant");

        public static Dish Find(string nameOfDish) =>   
            RestaurantDetails.Menu.Find(d => d.Name == nameOfDish);    
    }
}
