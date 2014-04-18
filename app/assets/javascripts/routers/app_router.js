window.FoodTruckFinder.Routers.AppRouter = Backbone.Router.extend({
  routes: {
  	"": "trucksIndex",
  	"trucks/new": "trucksNew",
  	"trucks/:id": "trucksShow"
  },

  trucksIndex: function () {
  	var indexView = new FoodTruckFinder.Views.TrucksIndex({
  		collection: FoodTruckFinder.Collections.trucks,
  	});

  	FoodTruckFinder.Collections.trucks.fetch();
  	$("#truck-index").html(indexView.render().$el);
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