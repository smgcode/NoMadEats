Foodtruckfinder::Application.routes.draw do
	root to: 'trucks#index'
  resources :trucks
  resources :truck_searches, only: [:create, :update, :destroy]
end
