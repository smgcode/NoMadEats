json.array!(@truck_searches) do |truck_search|
  json.partial!("truck_searches/truck_search", :truck_search => truck_search)
end