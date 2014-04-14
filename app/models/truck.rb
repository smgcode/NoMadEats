class Truck < ActiveRecord::Base
  attr_accessible :name, :address
  has_many :dealerships, dependent: :destroy
  has_many :truck_searches, :through => :dealerships
end
