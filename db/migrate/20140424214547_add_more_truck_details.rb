class AddMoreTruckDetails < ActiveRecord::Migration
  def change
    add_column :trucks, :facilitytype, :string
    add_column :trucks, :fooditems, :string
    add_column :trucks, :status, :string
  end
end
