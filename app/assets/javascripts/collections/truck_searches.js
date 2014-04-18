window.FoodTruckFinder.Collections.TruckSearches = Backbone.Collection.extend({
  url: "/truck_searches",
  model: FoodTruckFinder.Models.TruckSearch
});

window.FoodTruckFinder.Collections.truckSearches = new FoodTruckFinder.Collections.TruckSearches();