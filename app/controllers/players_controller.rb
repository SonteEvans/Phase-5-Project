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
      def update
        player = Player.find_by(id:params[:id])
        player.update(user_params)
        render json: player, status: :accepted
      end
    
      private
    
      def user_params
        params.permit(:username, :password)
      end
    
end
