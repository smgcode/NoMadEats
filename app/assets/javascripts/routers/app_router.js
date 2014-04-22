window.FoodTruckFinder.Routers.AppRouter = Backbone.Router.extend({
  routes: {
  	"": "content",
  	"truck_searches/new": "truckSearchNew",
  	"truck_searches/:id": "truckSearchShow"
  },

  content: function () {
  	// this.trucksIndex();
    this.truckSearchesIndex();
    this.truckSearchesNew();
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
  },

  truckSearchShow: function (id) {
  	var truckSearch = FoodTruckFinder.Collections.truckSearches.getOrFetch(id);
  	var showView = new FoodTruckFinder.Views.TruckSearchesShow({
  		model: truckSearch
  	});
  	$("#search-index").html(showView.render().$el);
  }

  // trucksNew: function () {
  // 	var newView = new FoodTruckFinder.Views.TrucksNew();
  // 	$("#truck-index").html(newView.render().$el);
  //   this.truckSearchesIndex();
  //   this.truckSearchesNew();
  // },

  // trucksShow: function (id) {
  // 	var model = FoodTruckFinder.Collections.trucks.getOrFetch(id);
  // 	var showView = new FoodTruckFinder.Views.TrucksShow({
  // 		model: model
  // 	});
  // 	$("#truck-index").html(showView.render().$el);
  //   this.truckSearchesIndex();
  //   this.truckSearchesNew();
  // },

  // trucksIndex: function () {
  // 	var indexView = new FoodTruckFinder.Views.TrucksIndex({
  // 		collection: FoodTruckFinder.Collections.trucks,
  // 	});
  // 	FoodTruckFinder.Collections.trucks.fetch();
  // 	$("#truck-index").html(indexView.render().$el);
  // }

});