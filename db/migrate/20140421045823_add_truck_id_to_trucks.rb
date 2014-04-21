class AddTruckIdToTrucks < ActiveRecord::Migration
  def change
  	add_column :trucks, :truck_search_id, :integer
  end
end
