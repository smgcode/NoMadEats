json.(truck_search, :id, :search, :latitude, :longitude, :created_at, :updated_at)

trucks ||= nil
unless trucks.nil?
	json.trucks(trucks) do |truck|
	  json.partial!("trucks/truck", :truck => truck)
	end
end