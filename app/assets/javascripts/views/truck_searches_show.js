window.FoodTruckFinder.Views.TruckSearchesShow = Backbone.View.extend({
  template: JST["truck_searches/show"],

  initialize: function (options) {
  	this.listenTo(this.model, "sync", this.render);
    this.listenTo(this.model.trucks(), "sync remove", this.render);
  },

  render: function(){
  	var renderedContent = this.template({
  		truckSearch: this.model
  	});

  	this.$el.html(renderedContent);

    this.model.trucks().each(function (truck){
      var trucksShowView = new FoodTruckFinder.Views.TrucksShow({
        model: truck
      });
      this.$(".trucks").append(trucksShowView.render().$el)
    });

  	return this;
  }
});