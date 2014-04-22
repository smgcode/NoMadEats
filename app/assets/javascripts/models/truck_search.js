window.FoodTruckFinder.Models.TruckSearch = Backbone.Model.extend({
  urlRoot: "/truck_searches",

  trucks: function () {
  	if (!this._trucks) {
      this._trucks = new FoodTruckFinder.Collections.Trucks([], {
	  		truckSearch: this
	  	});
    }
    return this._trucks;
  },

  parse: function (jsonResp) {
  	if(jsonResp.trucks){
  		this.trucks().set(jsonResp.trucks);
	  	delete jsonResp.trucks;
  	}

  	return jsonResp;
  }
});