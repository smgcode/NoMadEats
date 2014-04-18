window.FoodTruckFinder.Views.TruckSearchesIndex = Backbone.View.extend({
  template: JST["truck_searches/index"],

  // events: {
  // 	"click button#refresh": "refresh"
  // },

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

  	return this;
  }

  // refresh: function() {
  //   this.collection.fetch();
  // }
});