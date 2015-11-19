class Api::UsersController < ApplicationController

  def index
    users = User.find_by_search_string(params[:search_string])
    render json: users
  end

  def create
    user = User.new(user_params)
    user.set_up!
    if user.save
      log_in!(user)
      render json: user
    else
      render json: user.errors.full_messages
    end
  end

  def update
    user = User.find(params[:id])
    user.update!(user_params)
    render json: user
  end

  def show
    @user = User.includes(:profile).includes(:albums).find_by(username: params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :firstname,
      :lastname,
      :password,
      :birthday,
      :gender,
      :photo_id
    )
  end
end
