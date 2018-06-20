class Api::ShortsController < ApplicationController
    def index
        @collection = Collection.find(params[:collection_id])
        @shorts = @collection.shorts
        render json: @shorts
    end

    def create
        @collection = Collection.find(params[:collection_id])
        @short = @collection.shorts.create(short_params)

        render json: @short
    end

    def show
        @collection = Collection.find(params[:collection_id])
        @short = @collection.shorts.id(params[:id])
        render json: @short
    end

    def update
        @collection = Collection.find(params[:collection_id])
        @short = @collection.shorts.id(params[:id])
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
