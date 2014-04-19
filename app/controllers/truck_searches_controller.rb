class TruckSearchesController < ApplicationController

  def index
    @truck_searches = TruckSearch.all
    render :json => @truck_searches
  end

  def show
    @truck_search = TruckSearch.find(params[:id])
    render :json =>@truck_search
  end

  def create
    @truck_search = TruckSearch.new(params[:truck_search])
    if @truck_search.save
      # flash.notice = "Search '#{@truck_search.search}' Created!"
      # redirect_to truck_path
      render :json => @truck_search
    else
      render :json => @truck_search.errors, :status => :unporcessable_entity
    end
  end

  def update
    @truck_search = TruckSearch.find(params[:id])
    if @truck_search.update_attributes(params[:truck_search])
      # flash.notice = "Search '#{@truck_search.name}' Updated!"
      # redirect_to truck_path
      render :json => @truck_search
    else
      render :json => @truck_search.errors, :status => :unporcessable_entity
    end
  end

  def destroy
  	@truck_search = TruckSearch.find(params[:id])
  	if @truck_search.destroy
      # flash.notice = "Search '#{@truck_search.name}' Destroyed!"
    	# redirect_to trucks_path
      render :json => @truck_search
    else
      raise "WTF"
    end
  end

end