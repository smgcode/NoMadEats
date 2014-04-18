window.FoodTruckFinder.Routers.AppRouter = Backbone.Router.extend({
  routes: {
  	"": "content",
  	"trucks/new": "trucksNew",
  	"trucks/:id": "trucksShow"
  },

  content: function () {
  	var truckSearchesIndexView = new FoodTruckFinder.Views.TruckSearchesIndex({
  		collection: FoodTruckFinder.Collections.truckSearches,
  	});

  	FoodTruckFinder.Collections.truckSearches.fetch();
  	$("#search-index").html(truckSearchesIndexView.render().$el);

  	var trucksIndexView = new FoodTruckFinder.Views.TrucksIndex({
  		collection: FoodTruckFinder.Collections.trucks,
  	});

  	FoodTruckFinder.Collections.trucks.fetch();
  	$("#truck-index").html(trucksIndexView.render().$el);
  },

  trucksNew: function () {
  	var newView = new FoodTruckFinder.Views.TrucksNew();
  	$("#truck-index").html(newView.render().$el);
  },

  trucksShow: function (id) {
  	var model = FoodTruckFinder.Collections.trucks.getOrFetch(id);

  	var showView = new FoodTruckFinder.Views.TrucksShow({
  		model: model
  	});
  	$("#truck-index").html(showView.render().$el);
  }
});