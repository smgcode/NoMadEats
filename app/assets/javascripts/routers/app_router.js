window.FoodTruckFinder.Routers.AppRouter = Backbone.Router.extend({
  routes: {
  	"": "content",
  	"trucks/new": "trucksNew",
  	"trucks/:id": "trucksShow"
  },

  content: function () {
  	this.trucksIndex();
    this.truckSearchesIndex();
    this.truckSearchesNew();
  },

  trucksNew: function () {
  	var newView = new FoodTruckFinder.Views.TrucksNew();
  	$("#truck-index").html(newView.render().$el);
    this.truckSearchesIndex();
    this.truckSearchesNew();
  },

  trucksShow: function (id) {
  	var model = FoodTruckFinder.Collections.trucks.getOrFetch(id);
  	var showView = new FoodTruckFinder.Views.TrucksShow({
  		model: model
  	});
  	$("#truck-index").html(showView.render().$el);
    this.truckSearchesIndex();
    this.truckSearchesNew();
  },

  trucksIndex: function () {
  	var indexView = new FoodTruckFinder.Views.TrucksIndex({
  		collection: FoodTruckFinder.Collections.trucks,
  	});
  	FoodTruckFinder.Collections.trucks.fetch();
  	$("#truck-index").html(indexView.render().$el);
  },

  truckSearchesIndex: function() {
  	var indexView = new FoodTruckFinder.Views.TruckSearchesIndex({
  		collection: FoodTruckFinder.Collections.truckSearches,
  	});
  	FoodTruckFinder.Collections.truckSearches.fetch();
  	$("#search-index").html(indexView.render().$el);
  },

  truckSearchesNew: function() {
  	var newView = new FoodTruckFinder.Views.TruckSearchesNew();
  	$("#new-search").html(newView.render().$el);
  }
});