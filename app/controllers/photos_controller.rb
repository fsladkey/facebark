class PhotosController < ApplicationController

  def create
    photo = Photo.create!(photo_params)
    render json: "GOOD JOB ME"
  end

  def destroy
    photo = Photo.find(params[:id])
    photo.destroy!
    render json: "DESTROYED"
  end

  private

  def photo_params
    require(:photo).permit(:photo)
  end

end
