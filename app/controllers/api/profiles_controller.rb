class Api::ProfilesController < ApplicationController

  def update
    profile = Profile.find(params[:id])
    profile.update!(profile_params)
    render json: profile.user
  end

  private

  def profile_params
    params.require(:profile).permit(:breed, :hometown, :bio)
  end

end
