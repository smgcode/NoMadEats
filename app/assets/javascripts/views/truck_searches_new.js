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
    if (params.search.length == 0) {
    	return
    }

		var prevSearch = this.collection.where(params);

		if (prevSearch.length == 0) {
			var newTruckSearch = new FoodTruckFinder.Models.TruckSearch(params);
			var that = this;
			newTruckSearch.save({}, {
				success: function () {
					FoodTruckFinder.Collections.truckSearches.add(newTruckSearch);
					that.codeAddress(params.search);
				}
			});
		} else {
			Backbone.history.navigate("truck_searches/" + prevSearch[0].get("id"), { trigger: true});
		}
	},

	  // Google Maps API geocoding: turns an address into a gps coordinate
  codeAddress: function (address) {
    var geocoder = new google.maps.Geocoder();
    var that = this;
    var marker;
    var boundaries;
    var list;
    geocoder.geocode( { 'address': address }, function(results, status) {
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
      boundaries = that.getBoundaries(results);
      that.saveTruckList(boundaries, address);
    });
  },

  // Calculate a box that is one mile in each direction of the geo coded coordinates.
	// Using a one mile length for walking distance.
	getBoundaries: function(geoData) {
	  var boundaries = {};
	  // one mile is roughly the same for around san francisco which is our dataset. 
	  // However if we go outside of the city, one mile changes in lat lon. 
	  var oneMileLat = 0.0145;
	  var oneMileLon = 0.0183;
	  var coordinates = [geoData[0].geometry.location.lat(), geoData[0].geometry.location.lng()];

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
	  var sodaData = "http://data.sfgov.org/resource/rqzj-sfat.json?$limit=10&$where=within_box(location," + 
	    boundaries["north"] + "," +
	    boundaries["west"] + "," +
	    boundaries["south"] + "," + 
	    boundaries["east"] + ")"; 
    var truckSearchId = FoodTruckFinder.Collections.truckSearches.last().get("id")

	  $.getJSON(sodaData, function(trucks){
	    trucks.forEach( function(truck, idx){
	    	truckItem["name"] = truck["applicant"];
	      truckItem["address"] = truck["address"];
	      // truckItem["facilitytype"] = truck["facilitytype"];
	      // truckItem["fooditem"] = truck["fooditem"];
	      // truckItem["status"] = truck["status"];
	      truckItem["latitude"] = truck["latitude"];
	      truckItem["longitude"] = truck["longitude"];

	      truckItem["truck_search_id"] = truckSearchId

	      var newTruck = new FoodTruckFinder.Models.Truck(truckItem)
	      newTruck.save({}, {
	      	success: function () {
	      		FoodTruckFinder.Collections.truckSearches.last().trucks().add(newTruck);
	      	}
	      })
	    });
	  }).done(function( json ) {
		  Backbone.history.navigate("truck_searches/" + truckSearchId, { trigger: true});
	  });
	}
});