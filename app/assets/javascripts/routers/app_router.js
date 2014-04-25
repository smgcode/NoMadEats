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
      map: this.map,
      places: this.places
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

});