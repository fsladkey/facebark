class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    return nil unless session[:session_token]
    @user = User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def log_in!(user)
    puts "LOGGED IN"
    session[:session_token] = user.reset_session_token!
  end

  def log_out!
    puts "LOGGED OUT"
    current_user.reset_session_token!
    session[:session_token] = nil
  end

end
