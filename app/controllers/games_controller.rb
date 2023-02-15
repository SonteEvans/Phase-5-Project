class GamesController < ApplicationController
    skip_before_action :authorize, only: :index
    #create method
    def index
        render json: Game.all
    end
    #create a index
end
