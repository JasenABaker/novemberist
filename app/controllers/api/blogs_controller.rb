class Api::BlogsController < ApplicationController
    before_action :authenticate_user!
    def index
        @blogs = Blog.all
        render json: @blogs
    end

    def create
        @user = current_user
        @blog = @user.blogs.build(blog_params)

        if @user.save
            render json: @blog, status: :created, location: @blog
        else
            render json: @blog.errors, status: :unprocessable_entity
        end
    end

    def show
        @blog = Blog.find(params[:id])
        render json: @blog
    end

    def update
        @blog = Blog.find(params[:id])
        
        if @blog.update!(blog_params)
            render json: @blog
        else 
            render json: @blog.errors, status: :unprocessable_entity
        end
    end

    def destroy
        @blog = Blog.find(params[:id]).delete

        render status: :ok
    end

    private

    def blog_params
        params.require(:blog).permit(:title, :content)
    end
end
