json.extract! @photo, :id, :album_id
json.image_url asset_path(@photo.image.url)
json.user @photo.album.user
json.user_profile_image_url @photo.album.user.profile_picture.image.url
json.user_fullname "#{@photo.album.user.firstname} #{@photo.album.user.lastname}"
json.image_url asset_path(@photo.image.url)
json.num_licks @photo.licks.count
json.comments @photo.comments
json.licked @photo.licked_by?(current_user)

json.licks @photo.licks do |lick|
  json.author_name "#{lick.user.firstname} #{lick.user.lastname}"
end

json.comments @photo.comments.reverse do |comment|
  json.extract! comment, :id, :body
  json.user comment.user
  json.user_photo_url comment.user.profile_picture.image.url
end

json.time_created @photo.created_at
