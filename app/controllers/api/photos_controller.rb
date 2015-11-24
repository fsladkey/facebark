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

  private

  def photo_params
    params.require(:photo).permit(:image, :album_id)
  end

end
