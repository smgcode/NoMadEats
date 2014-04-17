window.FoodTruckFinder.Collections.Trucks = Backbone.Collection.extend({
  url: "/trucks",
  model: FoodTruckFinder.Models.Truck
});

window.FoodTruckFinder.Collections.trucks = new FoodTruckFinder.Collections.Trucks();