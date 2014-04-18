window.FoodTruckFinder.Collections.Trucks = Backbone.Collection.extend({
  url: "/trucks",
  model: FoodTruckFinder.Models.Truck,

  getOrFetch: function (id) {
  	var model;
  	var trucks = this;

  	if (model = this.get(id)){
  		return model;
  	} else {
  		model = new FoodTruckFinder.Models.Truck({ id: id });
  		model.fetch({
  			success: function () { trucks.add(model) }
  		});
  		return model;
  	}
  }
});

window.FoodTruckFinder.Collections.trucks = new FoodTruckFinder.Collections.Trucks();