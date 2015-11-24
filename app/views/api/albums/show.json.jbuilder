json.extract! @album, :id, :user_id, :title
json.photos @album.photos do |photo|
  json.extract! photo, :id
  json.user = photo.album.user
  json.image_url asset_path(photo.image.url)
  json.num_licks photo.licks.count
  json.time_created photo.created_at
end
