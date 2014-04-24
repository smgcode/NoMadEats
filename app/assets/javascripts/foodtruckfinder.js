window.FoodTruckFinder = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function () {
    var places = new Backbone.GoogleMaps.LocationCollection([{
        title: "Off the Grid: 5M @ Fifth and Mina",
        lat: 37.7824137,
        lng: -122.4066171
      }, {
        title: "Off the Grid: UN Plaza",
        lat: 37.7798761,
        lng: -122.4139862
      }]);

    var map = new google.maps.Map($('#map_canvas')[0], {
      center: new google.maps.LatLng(37.7822346, -122.4103306),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

  	new FoodTruckFinder.Routers.AppRouter({
      places: places,
      map: map
    });

  	Backbone.history.start();
  }
};

$(FoodTruckFinder.initialize);