class Api::NotificationsController < ApplicationController

  def update
    notification = Notification.find(params[:id])
    notification.update!(viewed: true)
    render json: notification
  end

end
