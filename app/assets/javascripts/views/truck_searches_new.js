window.FoodTruckFinder.Views.TruckSearchesNew = Backbone.View.extend({
	template: JST["truck_searches/new"],

	events: {
		"submit form": "submit"
	},

	initialize: function (options) {
    this.map = options.map,
    this.sanFranciscoBounds = options.sanFranciscoBounds
	},

	render: function (){
		var renderedContent = this.template();
		this.$el.html(renderedContent);

		return this;
	},

	submit: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()["truck_search"];
    if (params.search.length == 0) {
    	return
    }

		var prevSearch = this.collection.where(params);

		if (prevSearch.length == 0) {
			this.codeAddress(params);

		} else {
			Backbone.history.navigate("truck_searches/" + prevSearch[0].get("id"), { trigger: true});
		}
	},

  // Google Maps API geocoding: turns an address into a gps coordinate
  codeAddress: function (params) {
    var geocoder = new google.maps.Geocoder();
    var that = this;
    var marker;
    var boundaries;

    geocoder.geocode({
  	'address': params.search,
  	'bounds': this.sanFranciscoBounds
  	}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
	      params.latitude = results[0].geometry.location.lat();
	      params.longitude = results[0].geometry.location.lng();

				var newTruckSearch = new FoodTruckFinder.Models.TruckSearch(params);
  			newTruckSearch.save({}, {
					success: function () {
						FoodTruckFinder.Collections.truckSearches.add(newTruckSearch);
		        boundaries = that.getBoundaries([params.latitude, params.longitude]);
			      that.saveTruckList(boundaries, params.search);
					}
				});

      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  },

  // Calculate a box that is one mile in each direction of the geo coded coordinates.
	// Using a one mile length for walking distance.
	getBoundaries: function(coordinates) {
	  var boundaries = {};
	  // one mile is roughly the same for around san francisco which is our dataset. 
	  // However if we go outside of the city, one mile changes in lat lon. 
	  var oneMileLat = 0.0145/4.0;
	  var oneMileLon = 0.0183/4.0;

	  boundaries["north"] = coordinates[0] + oneMileLat;
	  boundaries["east"] = coordinates[1] + oneMileLon;
	  boundaries["south"] = coordinates[0] - oneMileLat;
	  boundaries["west"] = coordinates[1] - oneMileLon;

	  return boundaries;
	},

	// access the SF data given lat-lon boundaries and display the top ten results.
	// It will show the Food Truck, address, and the food items.
	saveTruckList: function(boundaries, address){
		var truckItem = {}
		var that = this;
	  var sodaData = "http://data.sfgov.org/resource/rqzj-sfat.json?facilitytype=truck&status=approved&$limit=20&$where=within_box(location," + 
	    boundaries["north"] + "," +
	    boundaries["west"] + "," +
	    boundaries["south"] + "," + 
	    boundaries["east"] + ")";
    var truckSearchId = FoodTruckFinder.Collections.truckSearches.first().get("id");

	  $.getJSON(sodaData, function(trucks){
	    trucks.forEach( function(truck, idx){
	    	truckItem["name"] = truck["applicant"];
	      truckItem["address"] = truck["address"];
	      truckItem["facilitytype"] = truck["facilitytype"];
	      truckItem["fooditems"] = truck["fooditems"];
	      truckItem["status"] = truck["status"];
	      truckItem["latitude"] = truck["latitude"];
	      truckItem["longitude"] = truck["longitude"];
	      truckItem["schedule"] = truck["schedule"];

	      truckItem["truck_search_id"] = truckSearchId

	      var newTruck = new FoodTruckFinder.Models.Truck(truckItem)
	      newTruck.save({}, {
	      	success: function () {
	      		FoodTruckFinder.Collections.truckSearches.first().trucks().add(newTruck);
	      	}
	      });
	    });
	  }).done(function( json ) {
		  Backbone.history.navigate("truck_searches/" + truckSearchId, { trigger: true});
	  });
	}
});