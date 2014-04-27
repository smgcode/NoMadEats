class AddScheduleToTrucks < ActiveRecord::Migration
  def change
    add_column :trucks, :schedule, :string
  end
end
