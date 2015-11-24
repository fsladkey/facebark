json.extract! @photo, :id, :album_id
json.image_url asset_path(@photo.image.url)
json.user @photo.album.user
json.image_url asset_path(@photo.image.url)
json.num_licks @photo.licks.count
json.comments @photo.comments
json.time_created @photo.created_at
