class Api::ShortsController < ApplicationController
    def index
        @shorts = Short.all
        render json: @shorts
    end

    def create
        @short = Short.create(short_params)

        render json: @short
    end

    def show
        @short = Short.find(params[:id])
        render json: @short
    end

    def update
        @short = Short.find(params[:id])
        @short.update!(short_params)
        render json: @short
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
