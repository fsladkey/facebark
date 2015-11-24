class Api::PhotosController < ApplicationController

  def create
    @photo = Photo.create!(photo_params)
    render :show
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

  def lick
    @photo = Photo.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @post.id, lickable_type: "Photo", user_id: current_user.id
    )
    unless @lick
      @lick = @post.licks.create!(user_id: current_user.id)
    end
    render :index
  end

  def unlick
    @post = Photo.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @post.id, lickable_type: "Photo", user_id: current_user.id
    )
    if @lick
      @lick.destroy!
    end
    find_posts
    render :index
  end

  private

  def photo_params
    params.require(:photo).permit(:image, :album_id)
  end

end
