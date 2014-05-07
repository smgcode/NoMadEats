window.FoodTruckFinder.Routers.AppRouter = Backbone.Router.extend({
  routes: {
  	"": "truckSearchesIndex",
  	"truck_searches/new": "truckSearchNew",
  	"truck_searches/:id": "truckSearchShow",
    "truck/:id": "truckShow"
  },

  initialize: function(options) {
    this.sfCenter = new google.maps.LatLng(37.7822346, -122.4103306);
    
    this.places = new Backbone.GoogleMaps.LocationCollection();
    
    this.map = new google.maps.Map($('#map_canvas')[0], {
      center: this.sfCenter,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    this.markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
      collection: this.places,
      map: this.map
    });

    var sw = new google.maps.LatLng(37.6940, -122.5537);
    var ne = new google.maps.LatLng(37.8424, -122.3553);
    this.sanFranciscoBounds = new google.maps.LatLngBounds(sw, ne);

    this.markerCollectionView.render();
    this.truckSearchesNew();

  },

  truckSearchesIndex: function() {
    this.markerCollectionView.closeChildren();
    this.map.setCenter(this.sfCenter);
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
      sanFranciscoBounds: this.sanFranciscoBounds
    });
  	$("#new-search").html(newView.render().$el);
  },

  truckSearchShow: function (id) {
  	var truckSearch = FoodTruckFinder.Collections.truckSearches.getOrFetch(id);
  	var showView = new FoodTruckFinder.Views.TruckSearchesShow({
  		model: truckSearch,
      map: this.map,
      markerCollectionView: this.markerCollectionView
  	});
  	$("#search-index").html(showView.render().$el);
  },

  truckShow: function (id) {
    var truck = new FoodTruckFinder.Models.Truck({ id: id });
    var that = this;
    truck.fetch({
      success: function() {
        var showView = new FoodTruckFinder.Views.TruckShow({
          model: truck,
          map: that.map,
          markerCollectionView: that.markerCollectionView
        });
        $("#search-index").html(showView.render().$el);
      }
    });
  }

});