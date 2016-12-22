json.extract! user, :id, :username, :email, :firstname, :lastname, :birthday, :gender, :profile
json.fullname "#{user.firstname} #{user.lastname}"

json.profile_image_url asset_path(user.profile_picture.image.url)
# change to image_url
json.thumb_url asset_path(user.profile_picture.image.url(:thumb))
json.cover_image_url asset_path(user.profile.cover_photo.image.url)
json.photo_id user.photo_id
json.profile_photo_id user.profile.photo_id

json.isFriend current_user.is_friend?(user.id)
json.friendshipRequested current_user.friendship_requested?(user.id)
json.waitingForFriendshipResponse user.friendship_requested?(current_user.id)

json.numFriendRequests user.friend_requests.length
json.friend_requests user.friend_requests do |friend_request|
  json.id friend_request.id
  json.user_id friend_request.user_id
  json.potential_friend friend_request.user.full_name
  json.profile_url "/#{friend_request.user.username}"
end

json.friends user.friends do |friend|
  json.extract! friend, :id, :username, :firstname, :lastname
  json.name friend.full_name
  json.profile_image_url asset_path(friend.profile_picture.image.url)
end

json.newNotifications user.new_notifications
json.notifications user.all_shown_notifications do |notification|
  json.extract! notification, :id, :notifiable_id, :notifiable_type, :viewed

  json.description notification.description
  json.user_photo_url notification.user.profile_picture.image.url

  json.content_id notification.content_id
  json.content_type notification.content_type
end

json.albums user.albums do |album|
  json.extract! album, :id, :title
  json.photo_count album.photos.length
  if album.photos.length > 0
    json.preview_url asset_path(album.photos.last.image.url)
  end
end
