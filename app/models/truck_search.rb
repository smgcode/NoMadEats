class TruckSearch < ActiveRecord::Base
  attr_accessible :search
  has_many :dealerships
  has_many :trucks, :through => :dealerships
end
