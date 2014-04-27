class Truck < ActiveRecord::Base
  attr_accessible :name, :address, :latitude, :longitude, :facilitytype, :fooditems, :status, :truck_search_id, :schedule

  validates :name, :presence => true
  
  # has_many :dealerships, dependent: :destroy
  # has_many :truck_searches, :through => :dealerships
  belongs_to :truck_search
end
