window.FoodTruckFinder.Views.TruckSearchesNew = Backbone.View.extend({
	template: JST["truck_searches/new"],

	events: {
		"submit form": "submit"
	},

	initialize: function (options) {
    this.map = options.map
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
		// TODO: move into call API section, and return DB info when no need for API.
		if (params.search.length != 0){
			this.codeAddress(params.search);
		}
	},

	  // Google Maps API geocoding: turns an address into a gps coordinate
  codeAddress: function (address) {
    var geocoder = new google.maps.Geocoder();
    var that = this;
    var marker;
    // var boundaries;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        that.map.setCenter(results[0].geometry.location);
        if(marker != null){
          marker.setMap(null);
        }
        marker = new google.maps.Marker({
            map: that.map,
            position: results[0].geometry.location
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
      // boundaries = getBoundaries(results);
      // getTruckList(boundaries, address);
    });
  }

});