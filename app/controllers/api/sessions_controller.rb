class Api::SessionsController < ApplicationController
  def show
    if logged_in?
      @user = current_user
      render 'api/users/show'
    else
      render json: ["Not logged in"]
    end
  end
end
