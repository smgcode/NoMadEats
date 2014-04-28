window.FoodTruckFinder = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function () {
    var places = new Backbone.GoogleMaps.LocationCollection();
    
    var map = new google.maps.Map($('#map_canvas')[0], {
      center: new google.maps.LatLng(37.7822346, -122.4103306),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
      collection: places,
      map: map
    });

    var sw = new google.maps.LatLng(37.6940, -122.5537);
    var ne = new google.maps.LatLng(37.8424, -122.3553);
    var sanFranciscoBounds = new google.maps.LatLngBounds(sw, ne);

    markerCollectionView.render();

  	new FoodTruckFinder.Routers.AppRouter({
      places: places,
      map: map,
      markerCollectionView: markerCollectionView,
      sanFranciscoBounds: sanFranciscoBounds
    });

  	Backbone.history.start();
  }
};

$(FoodTruckFinder.initialize);