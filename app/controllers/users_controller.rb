class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      log_in!(user)
      render json: user
    else
      render json: user.errors.full_messages
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: user.errors.full_messages
    end
  end

  def destroy
    user = User.find(params[:id])
    if user.destroy
      render json: user
    else
      render json: user.errors.full_messages
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
    )
  end
end
