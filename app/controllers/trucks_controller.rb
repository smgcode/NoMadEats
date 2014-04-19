class TrucksController < ApplicationController

	def index
		@trucks = Truck.all
    render :json => @trucks
	end

	def show
		@truck = Truck.find(params[:id])
    render :json => @truck
	end

  def create
    @truck = Truck.new(params[:truck])
    if @truck.save
      render :json => @truck
    else
      render :json => @truck.errors, :status => :unporcessable_entity
    end
  end

  def update
    @truck = Truck.find(params[:id])
    if @truck.update_attributes(params[:truck])
      render :json => @truck
    else
      render :json => @truck.errors, :status => :unporcessable_entity
    end
  end

  def destroy
  	@truck = Truck.find(params[:id])
  	if @truck.destroy
      render :json => @truck
    else
      raise "WTF"
    end
  end

end
