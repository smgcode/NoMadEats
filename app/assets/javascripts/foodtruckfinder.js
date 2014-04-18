window.FoodTruckFinder = {
  Models: {},
  Collections: {},
  Views: {},

  initialize: function () {
  	var indexView = new FoodTruckFinder.Views.TrucksIndex({
  		collection: FoodTruckFinder.Collections.trucks,
  	});

  	FoodTruckFinder.Collections.trucks.fetch();
  	$("body").append(indexView.render().$el);

  	var newView = new FoodTruckFinder.Views.TrucksNew();
  	$("body").append(newView.render().$el);
  }
};

$(FoodTruckFinder.initialize);