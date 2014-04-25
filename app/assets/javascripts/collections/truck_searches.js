window.FoodTruckFinder.Collections.TruckSearches = Backbone.Collection.extend({
  url: "/truck_searches",
  model: FoodTruckFinder.Models.TruckSearch,

  comparator: function (truck) {
    return -truck.get("id");
  },

  getOrFetch: function (id) {
  	var model;
  	var truckSearches = this;

  	if (model = this.get(id)){
  		model.fetch();
  		return model;
  	} else {
  		model = new FoodTruckFinder.Models.TruckSearch({ id: id });
  		model.fetch({
  			success: function () { truckSearches.add(model) }
  		});
  		return model;
  	}
  }
});

window.FoodTruckFinder.Collections.truckSearches = new FoodTruckFinder.Collections.TruckSearches();