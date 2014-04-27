window.FoodTruckFinder.Views.TruckShow = Backbone.View.extend({
  template: JST["truck/show"],

  initialize: function (options) {
  	this.map = options.map;
		this.markerCollectionView = options.markerCollectionView;
  },

  render: function () {
  	this.markerCollectionView.closeChildren();
  	var renderedContent = this.template({
  		truck: this.model
  	});

  	this.$el.html(renderedContent);

    this.renderMap();
    this.updateMarker(this.model);

  	return this;
  },

  renderMap: function() {
    var truck = this.model;
    var location = new google.maps.LatLng(
      truck.get("latitude"),
      truck.get("longitude")
    );
    this.map.setCenter(location);
  },

  updateMarker: function(truck) {
    var marker = new Backbone.GoogleMaps.Location({
      title: truck.get("name"),
      lat: truck.get("latitude"),
      lng: truck.get("longitude")
    });
    this.markerCollectionView.addChild(marker);
  }

});