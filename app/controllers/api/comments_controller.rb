class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.create!(comment_params)
    find_posts
  end

  def lick
    @comment = Comment.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @comment.id, lickable_type: "Comment", user_id: current_user.id
    )
    unless @lick
      @lick = @comment.licks.create!(user_id: current_user.id)
    end
    find_posts
    render "api/posts/index"
  end

  def unlick
    @comment = Comment.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @comment.id, lickable_type: "Comment", user_id: current_user.id
    )
    if @lick
      @lick.destroy!
    end
    find_posts
    render "api/posts/index"
  end

  #not currently in use
  # def update
  #   @comment = Comment.find(params[:id])
  #   @comment.update!(comment_params)
  #   find_posts
  # end

  # def destroy
  #   @comment = Comment.find(params[:id])
  #   @comment.destroy!
  #   find_posts
  # end


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
    render "api/posts/index"
  end

  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type)
  end

end
