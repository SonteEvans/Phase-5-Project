Rails.application.routes.draw do
  resources :mission_parties
  resources :players
  resources :missions
  resources :comments
  resources :posts
  resources :games

    # get '/hello', to: 'application#hello_world'
end
