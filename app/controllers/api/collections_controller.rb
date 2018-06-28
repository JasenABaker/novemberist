class Api::CollectionsController < ApplicationController
    def index
        @collections = Collection.all
        render json: @collections
    end

    def create
        @user = current_user
        @collection = @user.collections.build(Collection_params)

        if @user.save 
            render json: @collection, status: :created, location: @collection
        else
            render json: @collection.errors, status: :unprocessable_entity
        end
    end

    def show
        @collection = Collection.find(params[:id])
        render json: @collection
    end

    def update
        @collection = Collection.find(params[:id])
        
        if @collection.update!(collection_params)
            render json: @collection
        else
            render json: @collection.errors, status: :unprocessable_entity
        end
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
