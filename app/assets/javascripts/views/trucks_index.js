// window.FoodTruckFinder.Views.TrucksIndex = Backbone.View.extend({
//   template: JST["trucks/index"],

//   initialize: function(options) {
//     this.listenTo(
//     	this.collection,
//     	"sync add",
//     	this.render
//     );
//   },

//   render: function() {
//   	var renderedContent = this.template({
//   		trucks: this.collection
//   	});
//   	this.$el.html( renderedContent );

//   	return this;
//   }

// });