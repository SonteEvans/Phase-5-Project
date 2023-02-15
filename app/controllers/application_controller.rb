class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :authorize
    before_action :current_player

  
    private
    def current_player
      player = Player.find_by(id: session[:player_id])
    end 

    def authorize
      @current_player = Player.find_by(id: session[:player_id])
  
      render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_player
    end
  
    def render_unprocessable_entity_response(exception)
      render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end
end


