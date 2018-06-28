class Api::ShortsController < ApplicationController
    
    def index
        @shorts = Short.all
        render json: @shorts
    end
    def show
        @short = Short.find(params[:id])
        render json: @short
    end


    def create
        @user = current_user
        @short = @user.shorts.build(short_params)

        if @user.save
            render json: @short, status: :created, location: @short
        else
            render json: @short.errors, status: :unprocessable_entity
        end
    end

    

    def update
        @short = Short.find(params[:id])

        if @short.update!(short_params)
            render json: @short
        else
            render json: @short.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @short = Short.find(params[:id]).delete

        render status: :ok
    end

    private

    def short_params
        params.require(:short).permit(:title, :content)
    end
end
