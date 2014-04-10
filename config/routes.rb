Foodtruckfinder::Application.routes.draw do
	root to: 'trucks#index'
  resources :trucks
end
