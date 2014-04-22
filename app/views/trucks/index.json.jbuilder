json.array!(@trucks) do |truck|
	json.partial!("trucks/truck", :truck => truck)
end