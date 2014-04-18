window.FoodTruckFinder.Views.TrucksNew = Backbone.View.extend({
	template: JST["trucks/new"],

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
    
		var params = $(event.currentTarget).serializeJSON()["truck"];
		var newTruck = new FoodTruckFinder.Models.Truck(params);
		newTruck.save({}, {
			success: function (){
				FoodTruckFinder.Collections.trucks.add(newTruck);
				Backbone.history.navigate("", { trigger: true});
			}
		});
	}

});