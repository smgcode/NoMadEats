window.FoodTruckFinder.Views.TrucksShow = Backbone.View.extend({
  template: JST["trucks/show"],

  render: function(){
  	var renderedContent = this.template({
  		truck: this.model
  	});

  	this.$el.html(renderedContent);

  	return this;
  }
});