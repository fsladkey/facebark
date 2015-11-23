class Api::FriendshipsController < ApplicationController

  def destroy
    current_user.unfriend(params[:id])
    render json: current_user
  end

end
