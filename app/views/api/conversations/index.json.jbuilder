json.array! @conversations do |conversation|
  json.extract! conversation, :id, :user1_id, :user2_id
  json.friendFullname conversation.other_user(current_user.id).full_name
  json.friendPhotoUrl conversation.other_user(current_user.id).profile_picture.image.url

  json.messages conversation.messages do |message|
    json.extract! message, :id, :body, :sender_id
  end

end
