class CreateTruckSearches < ActiveRecord::Migration
  def change
    create_table :truck_searches do |t|
    	t.string :search
    	t.float :latitude
    	t.float :longitude

      t.timestamps
    end
  end
end
