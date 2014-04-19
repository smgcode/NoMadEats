window.FoodTruckFinder.Views.TruckSearchesShow = Backbone.View.extend({
  template: JST["truck_searches/show"],

  initialize: function (options) {
  	this.listenTo(this.model, "sync", this.render);
  },

  render: function(){
  	var renderedContent = this.template({
  		truckSearch: this.model
  	});

  	this.$el.html(renderedContent);

  	return this;
  }
});