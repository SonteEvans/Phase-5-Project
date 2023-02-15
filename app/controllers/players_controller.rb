class PlayersController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        player = Player.create!(user_params)
        session[:player_id] = player.id
        render json: player, status: :created
      end
    
      def show
        render json: @current_player
      end
    
      private
    
      def user_params
        params.permit(:username, :password, :alias, :avatar, :level )
      end
    
end
