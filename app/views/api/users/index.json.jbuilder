json.array! @users do |user|
  json.extract! user, :id, :full_name, :username
  json.thumb_url asset_path(user.profile_picture.image.url(:thumb))
end
