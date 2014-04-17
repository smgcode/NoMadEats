window.FoodTruckFinder = {
  Models: {},
  Collections: {},
  Views: {},

  initialize: function () {
  	var view = new FoodTruckFinder.Views.TrucksIndex({
  		collection: FoodTruckFinder.Collections.trucks,
  	});

  	FoodTruckFinder.Collections.trucks.fetch({
  		success: function() {
		  	$("body").append(view.render().$el);
  		}
  	});
  }
};

$(FoodTruckFinder.initialize);