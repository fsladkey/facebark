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
     lickable_id: @photo.id, lickable_type: "Photo", user_id: current_user.id
    )
    unless @lick
      @lick = @photo.licks.create!(user_id: current_user.id)
    end
    render :show
  end

  def unlick
    @photo = Photo.find(params[:id])
    @lick = Lick.find_by(
     lickable_id: @photo.id, lickable_type: "Photo", user_id: current_user.id
    )
    if @lick
      @lick.destroy!
    end
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:image, :album_id)
  end

end
