class Api::WipsController < ApplicationController
    
    def index
        @wips = Wip.all
        render json: @wips
    end
    def show
        @wip = Wip.find(params[:id])
        render json: @wip
    end

    def create
        @user = current_user
        @wip = @user.wips.build(wip_params)

        if @user.save
            render json: @wip, status: :created, location: @wip
        else
            render json: @wip.errors, status: :unprocessable_entity
    end

    

    def update
        @wip = Wip.find(params[:id])

        if @wip.update!(wip_params)
            render json: @wip
        else
            render json: @wip.errors, status: :unprocessable_entity
        end
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
