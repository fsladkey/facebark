class Api::ProfilesController < ApplicationController

  def update
    profile = Profile.find(params[:id])
    profile.update!(profile_params)
    @user = profile.user
    render 'api/users/user'
  end

  private

  def profile_params
    params.require(:profile).permit(:breed, :hometown, :bio, :photo_id)
  end

end
