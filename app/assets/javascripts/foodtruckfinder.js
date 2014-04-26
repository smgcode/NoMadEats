window.FoodTruckFinder = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function () {
    var places = new Backbone.GoogleMaps.LocationCollection();
    
    var map = new google.maps.Map($('#map_canvas')[0], {
      center: new google.maps.LatLng(37.7822346, -122.4103306),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
      collection: places,
      map: map
    });

  	new FoodTruckFinder.Routers.AppRouter({
      places: places,
      map: map,
      markerCollectionView: markerCollectionView
    });

  	Backbone.history.start();
  }
};

$(FoodTruckFinder.initialize);