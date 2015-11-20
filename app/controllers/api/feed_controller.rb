class Api::FeedController < ApplicationController

  def index
    @posts = Post.friends_posts(params[:user_id])
    render "api/posts/index"
  end

end
