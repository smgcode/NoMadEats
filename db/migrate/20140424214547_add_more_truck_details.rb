class AddMoreTruckDetails < ActiveRecord::Migration
  def change
    add_column :trucks, :facilitytype, :string
    add_column :trucks, :fooditem, :string
    add_column :trucks, :status, :string
  end
end
