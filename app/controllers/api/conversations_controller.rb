class Api::ConversationsController < ApplicationController

  def index
    if logged_in?
      @conversations = current_user.conversations
      render :index
    end
  end

end
