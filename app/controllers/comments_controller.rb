class CommentsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Comment.all
    end
end
