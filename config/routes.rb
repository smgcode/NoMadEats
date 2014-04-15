Foodtruckfinder::Application.routes.draw do
	root to: 'site#root'
  resources :trucks
  resources :truck_searches, :only => [:create, :update, :destroy]
end
