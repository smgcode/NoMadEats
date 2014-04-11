class Dealership < ActiveRecord::Base
  attr_accessible :truck_search_id, :truck_id
  belongs_to :truck
  belongs_to :truck_search
end
