class Api::LicksController < ApplicationController

  def create
    @lick = current_user.licks.create!(lick_params)
    find_posts
    render "api/posts/index"
  end

  def destroy
    @lick = current_user.licks.create!(lick_params)
    find_posts
    render "api/posts/index"
  end


  private

  def find_posts()
    if params[:post_type] == "profile"
      @posts = Profile.find(@comment.commentable.profile.id).
          posts.includes(:user).
          includes(:comments).
          includes(:user).
          order('updated_at DESC')
    else
      @posts = Post.friends_posts(current_user.id)
    end
  end

  def lick_params

  end

end
