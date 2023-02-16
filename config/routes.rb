Rails.application.routes.draw do
  # resources :mission_parties
  resources :players
  resources :missions
  resources :comments
  resources :posts
  resources :games


  post "/signup", to: "players#create"
  get "/me", to: "players#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/games", to: "games#index"
  get "/missionparty/:mission_id", to: "mission_parties#current_mission"
  get "/missionparty", to: "mission_parties#index"

  # get "/players_id", to:

end
