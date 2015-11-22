class Api::PostsController < ApplicationController

  def index
    @posts = Profile.find(params[:profile_id]).
        posts.includes(:user).
        includes(:comments).
        includes(:user).
        order('updated_at DESC')
    render :index
  end

  def create
    post = current_user.posts.create!(post_params)
    @posts = Profile.find(post.profile_id).posts.includes(:user).includes(:comments).order('updated_at DESC')
    render :index
  end

  def lick
    @post = Post.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @post.id, lickable_type: "Post", user_id: current_user.id
    )
    unless @lick
      @lick = @post.licks.create!(user_id: current_user.id)
    end
    find_posts
    render "api/posts/index"
  end

  def unlick
    @post = Post.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @post.id, lickable_type: "Post", user_id: current_user.id
    )
    if @lick
      @lick.destroy!
    end
    find_posts
    render "api/posts/index"
  end

  private

  def find_posts
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

  def post_params
    params.require(:post).permit(:body, :profile_id)
  end

end
