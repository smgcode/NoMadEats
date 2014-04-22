window.FoodTruckFinder.Views.TruckMap = Backbone.View.extend({

  initialize: function (options) {
  	// this.listenTo(this.model, "sync", this.render);
   //  this.listenTo(this.model.trucks(), "sync remove", this.render);
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

  render: function(){
    var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
        collection: this.places(),
        map: this.map()
    });
    markerCollectionView.render();
  }
});