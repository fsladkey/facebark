json.array! @conversations do |conversation|
  json.extract! conversation, :id, :user1_id, :user2_id

  json.messages conversation.messages do |message|
    json.extract! message, :id, :body, :sender_id
  end

end
