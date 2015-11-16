class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )
    if user
      log_in!(user)
      render json: user
    else
      render json: "Invalid username/email password combination"
    end
  end

  def destroy
    log_out!
    render json: {msg: "Successfully logged out"}
  end

end
