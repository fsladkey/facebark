class SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )
    if user
      log_in!(user)
      puts "logged in #{user.username}!"
      render json: user
    else
      render json: "Invalid username/email password combination"
    end
  end

  def show
    puts "current user is: #{current_user.username}!"
    render json: current_user
  end

  def destroy
    log_out! if current_user
    render json: {msg: "Logged out"}
  end

end
