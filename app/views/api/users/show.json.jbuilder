json.extract! @user, :id, :username, :email, :firstname, :lastname, :birthday, :gender, :profile
json.fullname "#{@user.firstname} #{@user.lastname}"

json.profile_image_url asset_path(@user.profile_picture.image.url)

json.profile_image do
  json.image_url asset_path(@user.profile_picture.image.url)
  json.comments @user.profile_picture.comments
end

json.cover_image_url asset_path(@user.profile.cover_photo.image.url)

json.cover_image do
  json.image_url asset_path(@user.profile.cover_photo.image.url)
  json.comments @user.profile.cover_photo.comments
end

json.isFriend current_user.is_friend?(@user.id)
json.friendshipRequested current_user.friendship_requested?(@user.id)

json.numFriendRequests @user.friend_requests.count
json.friend_requests @user.friend_requests do |friend_request|
  json.id friend_request.id
  json.potential_friend "#{friend_request.user.firstname} #{friend_request.user.lastname}"
  json.profile_url "/#{friend_request.user.username}"
end

json.friends @user.friends do |friend|
  json.extract! friend, :id, :username, :firstname, :lastname
  json.name "#{friend.firstname} #{friend.lastname}"
  json.profile_image_url asset_path(friend.profile_picture.image.url)
end

json.albums @user.albums do |album|
  json.extract! album, :id, :title
  json.photo_count album.photos.length
  if album.photos.length > 0
    json.preview_url asset_path(album.photos.last.image.url)
  end
end
