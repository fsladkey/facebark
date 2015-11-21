class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.create!(comment_params)
    find_posts
    render "api/posts/index"
  end

  def update
    @comment = Comment.find(params[:id])
    @comment.update!(comment_params)
    find_posts
    render "api/posts/index"
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
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

  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type)
  end

end
