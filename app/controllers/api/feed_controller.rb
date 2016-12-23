class Api::FeedController < ApplicationController

  def index
    @posts = Post.friends_posts(current_user.id)
    render "api/posts/index"
  end

end
