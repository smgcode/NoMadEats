window.FoodTruckFinder.Views.TrucksIndex = Backbone.View.extend({
  template: JST["trucks/index"],

  events: {
  	"click button#refresh": "refresh"
  },

  refresh: function() {
	  var view = this;
    this.collection.fetch({
    	success: function () { view.render(); }
    });
  },

  render: function() {
  	var renderedContent = this.template({
  		trucks: this.collection
  	});
  	this.$el.html( renderedContent );

  	return this;
  }
});