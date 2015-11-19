json.extract! @album, :id, :user_id, :title
json.photos @album.photos do |photo|
  json.extract! photo, :id
  json.image_url asset_path(photo.image.url)
end
