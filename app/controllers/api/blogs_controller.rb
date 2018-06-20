class Api::BlogsController < ApplicationController
    def index
        @blogs = Blog.all
        render json: @blogs
    end

    def create
        @blog = Blog.create(blog_params)

        render json: @blog
    end

    def show
        @blog = Blog.find(params[:id])
        render json: @blog
    end

    def update
        @blog = Blog.find(params[:id])
        @blog.update!(blog_params)
        render json: @blog
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
