class Api::WipsController < ApplicationController
    def index
        @wips = Wip.all
        render json: @wips
    end

    def create
        @wip = Wip.create(wip_params)

        render json: @wip
    end

    def show
        @wip = Wip.find(params[:id])
        render json: @wip
    end

    def update
        @wip = Wip.find(params[:id])
        @wip.update!(wip_params)
        render json: @wip
    end

    def destroy
        @wip = Wip.find(params[:id]).delete

        render status: :ok
    end

    private

    def wip_params
        params.require(:wip).permit(:title, :content, :draft, :percent)
    end
end
