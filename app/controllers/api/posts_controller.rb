class Api::PostsController < ApplicationController

  def index
    @posts = Profile.find(params[:profile_id]).posts.includes(:user)
    render :index
  end

  def create
    post = current_user.posts.create!(post_params)
    @posts = Profile.find(post.id).posts.includes(:user)
    render :index
  end

  private

  def post_params
    params.require(:post).permit(:body, :profile_id)
  end

end
