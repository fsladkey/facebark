class Api::MessagesController < ApplicationController

  def create
    @message = current_user.sent_messages.create!(message_params)
    Pusher['private-'+params[:message][:receiver_id]].trigger('new_message', {:from => current_user.full_name, :subject => @message.body})
    render json: @message
  end

  def message_params
    params.require(:message).permit(:receiver_id, :body)
  end

end
