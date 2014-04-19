class Truck < ActiveRecord::Base
  attr_accessible :name, :address

  validates :name, :presence => true
  
  has_many :dealerships, dependent: :destroy
  has_many :truck_searches, :through => :dealerships
end
