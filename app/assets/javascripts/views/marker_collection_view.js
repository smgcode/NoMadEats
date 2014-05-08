window.FoodTruckFinder.Views.MarkerCollectionView = Backbone.GoogleMaps.MarkerCollectionView.extend({
  markerView: FoodTruckFinder.Views.MarkerView,

  addChild: function(model) {
	  this.markerView = FoodTruckFinder.Views.MarkerView;
	  Backbone.GoogleMaps.MarkerCollectionView.prototype.addChild.apply(this, arguments);
  }

});