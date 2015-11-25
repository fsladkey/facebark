class Api::FeedController < ApplicationController

  def index
    if logged_in?
      @posts = Post.friends_posts(current_user.id)
      render "api/posts/index"
    end
  end

end
