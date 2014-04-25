window.FoodTruckFinder.Routers.AppRouter = Backbone.Router.extend({
  routes: {
  	"": "content",
  	"truck_searches/new": "truckSearchNew",
  	"truck_searches/:id": "truckSearchShow"
  },

  initialize: function(options) {
    this.places = options.places,
    this.map = options.map
  },

  content: function () {
    this.truckSearchesIndex();
    this.truckSearchesNew();
    this.truckMapShow();
  },

  truckSearchesIndex: function() {
  	var indexView = new FoodTruckFinder.Views.TruckSearchesIndex({
  		collection: FoodTruckFinder.Collections.truckSearches
  	});
  	FoodTruckFinder.Collections.truckSearches.fetch();
  	$("#search-index").html(indexView.render().$el);
  },

  truckSearchesNew: function() {
  	var newView = new FoodTruckFinder.Views.TruckSearchesNew({
      collection: FoodTruckFinder.Collections.truckSearches,
      map: this.map
    });
  	$("#new-search").html(newView.render().$el);
  },

  truckSearchShow: function (id) {
  	var truckSearch = FoodTruckFinder.Collections.truckSearches.getOrFetch(id);
  	var showView = new FoodTruckFinder.Views.TruckSearchesShow({
  		model: truckSearch
  	});
  	$("#search-index").html(showView.render().$el);
    this.truckSearchesNew();
  }, 

  truckMapShow: function() {
    var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
      collection: this.places,
      map: this.map
    });
    markerCollectionView.render();
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