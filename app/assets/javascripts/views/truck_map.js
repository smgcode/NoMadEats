window.FoodTruckFinder.Views.TruckMap = Backbone.View.extend({

  template: JST["map/map"],

  initialize: function (options) {
  	// this.listenTo(this.model, "sync", this.render);
   //  this.listenTo(this.model.trucks(), "sync remove", this.render);
  },

  el: "#map",

  events: {
    "submit form": "submit"
  },

  render: function(){
    // var renderedContent = this.template();
    // this.$el.html(renderedContent);
    $("#map").html(this.template());

    var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
      collection: this.places(),
      map: this.map()
    });
    markerCollectionView.render();
    // this.codeAddress();
  },

  places: function () {
    if (!this._places) {
      this._places = new Backbone.GoogleMaps.LocationCollection([{
        title: "Off the Grid: 5M @ Fifth and Mina",
        lat: 37.7824137,
        lng: -122.4066171
      }, {
        title: "Off the Grid: UN Plaza",
        lat: 37.7798761,
        lng: -122.4139862
      }]);
    }
    return this._places
  },

  map: function () {
    if (!this._map) {
      this._map = new google.maps.Map($('#map_canvas')[0], {
      center: new google.maps.LatLng(37.7822346, -122.4103306),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    }
    return this._map
  },

  submit: function (event) {
    event.preventDefault();
    this.codeAddress();
    // Backbone.history.navigate("", { trigger: true});
  },

  // Google Maps API geocoding: turns an address into a gps coordinate
  codeAddress: function () {
    var geocoder = new google.maps.Geocoder();
    var address = "400 Spear St. San Francisco, CA";
    var that = this;
    var marker;
    // var boundaries;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        that.map().setCenter(results[0].geometry.location);
        if(marker != null){
          marker.setMap(null);
        }
        marker = new google.maps.Marker({
            map: that.map(),
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      // boundaries = getBoundaries(results);
      // getTruckList(boundaries, address);
    });
  }
});