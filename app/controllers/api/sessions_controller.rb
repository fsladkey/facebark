class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
      )
    if @user
      log_in!(@user)
      render 'api/users/show'
    else
      render json: "Invalid username/email password combination"
    end
  end

  def show
    if logged_in?
      @user = current_user
      render 'api/users/show'
    else
      render json: "Not logged in"
    end
  end

  def destroy
    log_out! if current_user
    render json: {msg: "Logged out"}
  end

end
