Foodtruckfinder::Application.routes.draw do
	root to: 'site#root'

  resources :truck_searches, :defaults => { :format => :json } do 
  	resources :trucks, :only => [:index]
  end

  resources :trucks, :except => [:index], :defaults => { :format => :json }
end
