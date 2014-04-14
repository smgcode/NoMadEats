class TruckSearch < ActiveRecord::Base
  attr_accessible :search
  has_many :dealerships, dependent: :destroy
  has_many :trucks, :through => :dealerships
end
