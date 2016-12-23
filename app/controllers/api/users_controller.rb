class Api::UsersController < ApplicationController

  def index
    @users = User.find_by_search_string(params[:search_string])
  end

  def create
    @user = User.create(user_params)
    @user.set_up!
    if @user.save
      log_in!(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update!(user_params)
    render :show
  end

  def show
    @user = User.includes(:albums).find_by(username: params[:username])
    if @user
      render :show
    else
      render json: ["User not found"], status: 404
    end
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
