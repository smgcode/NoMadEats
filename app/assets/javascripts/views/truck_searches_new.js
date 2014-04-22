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

		// Search not included in our database
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
	}

});