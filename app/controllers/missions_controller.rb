class MissionsController < ApplicationController
    skip_before_action :authorize, only: :index

    
    def index 
        render json: Mission.all
    end
    # create method
    # step one create create route
    def create 
        mission = Mission.create!(raid_params)
        render json: mission, status: :create
    end
    
    
    private
    # step two create params in private
    def raid_params 
       params.permit(:title, :description, :game_id) 
    end
end
