class Api::CommentsController < ApplicationController

  def create
    @comment = current_user.comments.create!(comment_params)
    unless @comment.commentable.user.id == current_user.id
      @comment.notifications.create!(user_id: @comment.commentable.user.id)
    end
    render :show
  end

  def lick
    @comment = Comment.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @comment.id, lickable_type: "Comment", user_id: current_user.id
    )
    unless @lick
      @lick = @comment.licks.create!(user_id: current_user.id)
    end
    render :show
  end

  def unlick
    @comment = Comment.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @comment.id, lickable_type: "Comment", user_id: current_user.id
    )
    if @lick
      @lick.destroy!
    end
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type)
  end

end
