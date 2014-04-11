class ChangeTruckSearchIdType < ActiveRecord::Migration
  def change
  	remove_column :dealerships, :truck_search_id, :string
  	add_column :dealerships, :truck_search_id, :integer
  end
end
