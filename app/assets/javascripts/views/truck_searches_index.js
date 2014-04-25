window.FoodTruckFinder.Views.TruckSearchesIndex = Backbone.View.extend({
  template: JST["truck_searches/index"],

  initialize: function(options) {
    this.listenTo(this.collection, "sync add", this.render);
  },

  render: function() {
  	var renderedContent = this.template({
  		truck_searches: this.collection
  	});
  	this.$el.html( renderedContent );

  	return this;
  }, 

});