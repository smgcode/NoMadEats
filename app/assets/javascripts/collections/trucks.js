window.FoodTruckFinder.Collections.Trucks = Backbone.Collection.extend({
  model: FoodTruckFinder.Models.Truck,

  url: function () {
    return this.truckSearch.url() + "/trucks";
  },

  initialize: function (models, options){
    this.truckSearch = options.truckSearch;
  },

  // getOrFetch: function (id) { 
  // 	var model;
  // 	var trucks = this;

  // 	if (model = this.get(id)){
  // 		return model;
  // 	} else {
  // 		model = new FoodTruckFinder.Models.Truck({ id: id });
  // 		model.fetch({
  // 			success: function () { trucks.add(model) }
  // 		});
  // 		return model;
  // 	}
  // }
});

// window.FoodTruckFinder.Collections.trucks = new FoodTruckFinder.Collections.Trucks([], {});