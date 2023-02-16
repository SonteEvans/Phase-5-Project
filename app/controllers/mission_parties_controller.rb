class MissionPartiesController < ApplicationController
    def index
        render json: MissionParty.all
    end

    def current_mission
        mission = MissionParty.where(mission_id: params[:mission_id])
        render json: mission
    end
end
