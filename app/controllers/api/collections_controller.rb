class Api::CollectionsController < ApplicationController
    def index
        @collections = Collection.all
        render json: @collections
    end

    def create
        @collection = Collection.create(Collection_params)

        render json: @collection
    end

    def show
        @collection = Collection.find(params[:id])
        render json: @collection
    end

    def update
        @collection = Collection.find(params[:id])
        @collection.update!(collection_params)
        render json: @collection
    end

    def destroy
        @collection = Collection.find(params[:id]).delete

        render status: :ok
    end

    private

    def collection_params
        params.require(:collection).permit(:title, :info)
    end
end
