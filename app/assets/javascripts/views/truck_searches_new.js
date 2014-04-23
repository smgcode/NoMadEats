window.FoodTruckFinder.Views.TruckSearchesNew = Backbone.View.extend({
	template: JST["truck_searches/new"],

	events: {
		"submit form": "submit"
	},

	render: function (){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()["truck_search"];
		var search = this.collection.where(params);

		if (search.length == 0) {
			var newTruckSearch = new FoodTruckFinder.Models.TruckSearch(params);
			newTruckSearch.save({}, {
				success: function () {
					FoodTruckFinder.Collections.truckSearches.add(newTruckSearch);
					Backbone.history.navigate("", { trigger: true});
				}
			});
		} else {
			
		}
		// Call map's codeAddress
		// should not be using prototype? Should make a model and add code address function there?
		if (params.search.length != 0){
			FoodTruckFinder.Views.TruckMap.prototype.codeAddress(params.search);
		}
	}

});