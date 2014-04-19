Foodtruckfinder::Application.routes.draw do
	root to: 'site#root'

  resources :truck_searches do 
  	resources :trucks, :only => [:index]
  end

  resources :trucks, :except => [:index]
end
