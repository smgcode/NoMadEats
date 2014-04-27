window.FoodTruckFinder.Views.TrucksShow = Backbone.View.extend({
  template: JST["trucks/show"],

  // events: {
  // 	"click button.destroy": "destroy"
  // },

  render: function () {
  	var renderedContent = this.template({
  		truck: this.model
  	});

  	this.$el.html(renderedContent);

  	return this;
  },

  // destroy: function() {
  // 	this.model.destroy();
  // }
});