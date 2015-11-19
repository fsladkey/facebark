json.extract! @user, :id, :username, :email, :firstname, :lastname, :birthday, :gender, :profile
json.profile_image_url asset_path(@user.profile_picture.image.url)
json.cover_image_url asset_path(@user.profile.cover_photo.image.url)

json.albums @user.albums do |album|
  json.extract! album, :id, :title
  json.photo_count album.photos.length
  if album.photos.length > 0
    json.preview_url asset_path(album.photos.first.image.url)
  end
end
