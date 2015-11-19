class Api::AlbumsController < ApplicationController

  def show
    @album = Album.includes(:photos).find(params[:id])
    render :show
  end
end
