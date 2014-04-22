class TrucksController < ApplicationController

	def index
    @trucks = Truck.where(:truck_search_id => params[:truck_search_id])
    render "trucks/index"
	end

	def show
		@truck = Truck.find(params[:id])
    render "trucks/show"
	end

  def create
    @truck = Truck.new(params[:truck])
    if @truck.save
      render "trucks/show"
    else
      render :json => @truck.errors, :status => :unporcessable_entity
    end
  end

  def update
    @truck = Truck.find(params[:id])
    if @truck.update_attributes(params[:truck])
      render "trucks/show"
    else
      render :json => @truck.errors, :status => :unporcessable_entity
    end
  end

  def destroy
  	@truck = Truck.find(params[:id])
  	if @truck.destroy
      render "trucks/show"
    else
      raise "WTF"
    end
  end

end
