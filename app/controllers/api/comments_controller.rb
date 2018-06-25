class Api::CommentsController < ApplicationController
    before_action :authenticate_user!
    def index
        @comments = Comment.all
        render json: @comments
    end

    def create
        @user = current_user
        @comment = @user.comments.build(comment_params)

        if @user.save
            render json: @comment, status: :created, location: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
        end
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment
    end

    def update
        @comment = Comment.find(params[:id])
        
        if @comment.update!(comment_params)
            render json: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
        end   
    end

    def destroy
        @comment = Comment.find(params[:id]).delete

        render status: :ok
    end

    private

    def comment_params
        params.require(:comment).permit(:content)
    end
end
