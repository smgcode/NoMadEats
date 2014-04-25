class TruckSearch < ActiveRecord::Base
  attr_accessible :search, :latitude, :longitude

  validates :search, :presence => true

  # has_many :dealerships, dependent: :destroy
  # has_many :trucks, :through => :dealerships
  has_many :trucks, :class_name => "Truck"

end
