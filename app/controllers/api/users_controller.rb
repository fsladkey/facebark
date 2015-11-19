class Api::UsersController < ApplicationController

  def index
    users = User.find_by_search_string(params[:search_string])
    render json: users
  end

  def create
    user = User.new(user_params)
    if user.save
      log_in!(user)
      Profile.create!(user_id: user.id)
      Album.create!(user_id: user.id, title: "#{user.firstname.capitalize}'s Photo Album")
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
    @user = User.find_by(username: params[:id])
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
    )
  end
end
