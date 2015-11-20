class FriendRequestsController < ApplicationController

  def create
    friend_request = current_user.friend_requests.create!(
      friend_id: params[:friend_request][:friend_id]
      )
    render json: friend_request
  end

  def update
    friend_request = FriendRequest.find(params[:id])
    friend_request.approve!
    render json: friend_request
  end

  def delete
    friend_request = FriendRequest.find(params[:id])
    friend_request.delete
    render json: friend_request
  end

end
