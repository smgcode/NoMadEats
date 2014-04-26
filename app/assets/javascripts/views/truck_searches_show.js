window.FoodTruckFinder.Views.TruckSearchesShow = Backbone.View.extend({
  template: JST["truck_searches/show"],

  initialize: function (options) {
    this.map = options.map;
    this.places = options.places;
    this.markerCollectionView = options.markerCollectionView;
  	this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.trucks(), "sync remove", this.render);
  },

  render: function() {
  	var renderedContent = this.template({
  		truckSearch: this.model
  	});

  	this.$el.html(renderedContent);
    this.renderMap();
    this.renderTruckList();
  	return this;
  },

  renderTruckList: function() {
    var that = this;
    this.markerCollectionView.closeChildren();
    this.model.trucks().each(function (truck){
      var trucksShowView = new FoodTruckFinder.Views.TrucksShow({
        model: truck
      });
      this.$(".trucks").append(trucksShowView.render().$el);
      that.updateMarkers(truck);
    });
  },

  renderMap: function() {
    var truckSearch = this.model;
    var location = new google.maps.LatLng(
      truckSearch.get("latitude"),
      truckSearch.get("longitude")
    );
    this.map.setCenter(location);
  },

  updateMarkers: function(truck) {
    var marker = new Backbone.GoogleMaps.Location({
      title: truck.get("name"),
      lat: truck.get("latitude"),
      lng: truck.get("longitude")
    });
    this.markerCollectionView.addChild(marker);
  }
});