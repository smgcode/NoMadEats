window.FoodTruckFinder.Views.TruckShow = Backbone.View.extend({
  template: JST["truck/show"],

  render: function () {
  	var renderedContent = this.template({
  		truck: this.model
  	});

  	this.$el.html(renderedContent);

  	return this;
  },

});