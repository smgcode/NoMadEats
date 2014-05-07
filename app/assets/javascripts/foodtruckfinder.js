window.FoodTruckFinder = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function () {
  	new FoodTruckFinder.Routers.AppRouter();
  	Backbone.history.start();
  }
};

$(FoodTruckFinder.initialize);