class TrucksController < ApplicationController

	def index
		@trucks = Truck.all
    # @searches = TruckSearch.all
    render :json => @trucks
	end

	def show
		@truck = Truck.find(params[:id])
    render :json => @truck
	end

	def new
		@truck = Truck.new
	end

  def create
    @truck = Truck.new(params[:truck])
    if @truck.save
      # flash.notice = "Truck '#{@truck.name}' Created!"
      # redirect_to truck_path(@truck)
      render :json => @truck
    else
      render :json => @truck.errors, :status => :unporcessable_entity
    end
  end

  def edit
  	@truck = Truck.find(params[:id])
  end

  def update
    @truck = Truck.find(params[:id])
    if @truck.update_attributes(params[:truck])
      # flash.notice = "Truck '#{@truck.name}' Updated!"
      # redirect_to truck_path(@truck)
      render :json => @truck
    else
      render :json => @truck.errors, :status => :unporcessable_entity
    end
  end

  def destroy
  	@truck = Truck.find(params[:id])
  	if @truck.destroy
      # flash.notice = "Truck '#{@truck.name}' Destroyed!"
    	# redirect_to trucks_path
      render :json => @truck
    else
      raise "WTF"
    end
  end

end
