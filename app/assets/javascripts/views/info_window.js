window.FoodTruckFinder.Views.InfoWindow = Backbone.GoogleMaps.InfoWindow.extend({
	initialize: function(){
    this.$el[0] = JST["map/info_window"]({
  		name: this.model.get("title"),
  		lat: this.model.get("lat"),
  		lng: this.model.get("lng")
  	});
	}
});