class StaticPagesController < ApplicationController
  def root
    if logged_in?
      render :root
    else
      render :sign_in
    end
  end
end
