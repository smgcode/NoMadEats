window.FoodTruckFinder.Routers.AppRouter = Backbone.Router.extend({
  routes: {
  	"": "content",
  	"truck_searches/new": "truckSearchNew",
  	"truck_searches/:id": "truckSearchShow",
    "truck/:id": "truckShow"
  },

  initialize: function(options) {
    this.places = options.places,
    this.map = options.map,
    this.markerCollectionView = options.markerCollectionView
  },

  content: function () {
    this.truckSearchesIndex();
    this.truckSearchesNew();
    this.markerCollectionView.render();
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
    });
  	$("#new-search").html(newView.render().$el);
  },

  truckSearchShow: function (id) {
  	var truckSearch = FoodTruckFinder.Collections.truckSearches.getOrFetch(id);
  	var showView = new FoodTruckFinder.Views.TruckSearchesShow({
  		model: truckSearch,
      map: this.map,
      places: this.places,
      markerCollectionView: this.markerCollectionView
  	});
  	$("#search-index").html(showView.render().$el);
    this.truckSearchesNew();
  },

  truckShow: function (id) {
    var truck = new FoodTruckFinder.Models.Truck({ id: id });
    truck.fetch({
      success: function() {
        var showView = new FoodTruckFinder.Views.TruckShow({
          model: truck
        });
        $("#search-index").html(showView.render().$el);
      }
    });

    this.truckSearchesNew();
  }

});