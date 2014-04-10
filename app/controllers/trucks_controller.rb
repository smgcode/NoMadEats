class TrucksController < ApplicationController

	def index
		@trucks = Truck.all
	end

	def show
		@truck = Truck.find(params[:id])
	end

	def new
		@truck = Truck.new
	end

  def create
    @truck = Truck.new()
    @truck.name = params[:truck][:name]
    @truck.address = params[:truck][:address]
    @truck.save
    flash.notice = "Truck '#{@truck.name}' Created!"
    redirect_to truck_path(@truck)
  end

  def edit
  	@truck = Truck.find(params[:id])
  end

  def update
    @truck = Truck.find(params[:id])
    @truck.update_attributes(params[:truck])
    flash.notice = "Truck '#{@truck.name}' Updated!"
    redirect_to truck_path(@truck)
  end

  def destroy
  	@truck = Truck.find(params[:id])
  	@truck.destroy
    flash.notice = "Truck '#{@truck.name}' Destroyed!"
  	redirect_to trucks_path
  end

end
