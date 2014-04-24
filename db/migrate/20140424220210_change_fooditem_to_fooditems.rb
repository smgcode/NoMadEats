class ChangeFooditemToFooditems < ActiveRecord::Migration
  def change
  	remove_column :trucks, :fooditem, :string
    add_column :trucks, :fooditems, :string
  end
end
