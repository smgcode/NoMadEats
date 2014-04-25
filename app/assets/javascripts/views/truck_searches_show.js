window.FoodTruckFinder.Views.TruckSearchesShow = Backbone.View.extend({
  template: JST["truck_searches/show"],

  initialize: function (options) {
    this.map = options.map;
  	this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.trucks(), "sync remove", this.render);
  },

  render: function() {
  	var renderedContent = this.template({
  		truckSearch: this.model
  	});

  	this.$el.html(renderedContent);
    this.renderTrucks();
    this.renderMap();

  	return this;
  },

  renderTrucks: function() {
    this.model.trucks().each(function (truck){
      var trucksShowView = new FoodTruckFinder.Views.TrucksShow({
        model: truck
      });
      this.$(".trucks").append(trucksShowView.render().$el)
    });
  },

  renderMap: function() {
    var truckSearch = this.model;
    var location = new google.maps.LatLng(
      truckSearch.get("latitude"),
      truckSearch.get("longitude")
    );
    this.map.setCenter(location);
  }
});