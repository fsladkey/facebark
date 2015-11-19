class Api::PostsController < ApplicationController
  def index
    @posts = Profile.find(params[:id]).posts.include(:user)
    render :index
  end

  def create
    @post = current_user.posts.new(post_params)
    render json: @post
  end

  private
  def post_params
    params.require(:post).permit(:body, :profile_id)
  end

end
