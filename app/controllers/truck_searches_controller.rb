class TruckSearchesController < ApplicationController

  def index
    @truck_searches = TruckSearch.all
    render "truck_searches/index"
  end

  def show
    @truck_search = TruckSearch.find(params[:id])
    @trucks = @truck_search.trucks
    render "truck_searches/show"
  end

  def create
    @truck_search = TruckSearch.new(params[:truck_search])
    if @truck_search.save
      render "truck_searches/show"
    else
      render :json => @truck_search.errors, :status => :unporcessable_entity
    end
  end

  def update
    @truck_search = TruckSearch.find(params[:id])
    if @truck_search.update_attributes(params[:truck_search])
      render "truck_searches/show"
    else
      render :json => @truck_search.errors, :status => :unporcessable_entity
    end
  end

  def destroy
  	@truck_search = TruckSearch.find(params[:id])
  	if @truck_search.destroy
      render "truck_searches/show"
    else
      raise "WTF"
    end
  end

end