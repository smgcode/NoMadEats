window.FoodTruckFinder.Collections.TruckSearches = Backbone.Collection.extend({
  url: "/truck_searches",
  model: FoodTruckFinder.Models.TruckSearch
});