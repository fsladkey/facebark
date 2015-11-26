class Api::MessagesController < ApplicationController

  def create
    @message = current_user.sent_messages.create!(message_params)
    Pusher['private-'+params[:message][:receiver_id]].trigger('new_message', {
      body: @message.body,
      conversation_id: @message.conversation_id
      })
    render json: @message
  end

  def message_params
    params.require(:message).permit(:conversation_id, :body)
  end

end
