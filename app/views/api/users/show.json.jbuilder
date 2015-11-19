json.extract! @user, :id, :username, :email, :firstname, :lastname, :birthday, :gender, :profile, :albums
json.profile_image_url asset_path(@user.profile_picture.image.url)
json.cover_image_url asset_path(@user.profile.cover_photo.image.url)
