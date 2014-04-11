class ChangeTruckSearchId < ActiveRecord::Migration
  def change
  	add_column :dealerships, :truck_search_id, :string
  	remove_column :dealerships, :truckSearch_id, :string
  end
end
