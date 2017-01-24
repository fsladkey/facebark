class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in!(@user)
    end
    redirect_to root_path
  end
  
  def destroy
    log_out! if logged_in?
    redirect_to root_path
  end

end
