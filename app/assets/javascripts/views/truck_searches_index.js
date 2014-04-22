window.FoodTruckFinder.Views.TruckSearchesIndex = Backbone.View.extend({
  template: JST["truck_searches/index"],

  initialize: function(options) {
    this.listenTo(
    	this.collection,
    	"sync add",
    	this.render
    );
  },

  render: function() {
  	var renderedContent = this.template({
  		truck_searches: this.collection
  	});
  	this.$el.html( renderedContent );

    // Create Google map instance
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

    // Render Markers
    var markerCollectionView = new Backbone.GoogleMaps.MarkerCollectionView({
        collection: places,
        map: map
    });
    markerCollectionView.render();

  	return this;
  }
});