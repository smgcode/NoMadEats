class CreateDealerships < ActiveRecord::Migration
  def change
    create_table :dealerships do |t|
      t.integer :truck_id
      t.integer :truck_search_id

      t.timestamps
    end
  end
end
