json.extract! @photo, :id, :album_id
json.image_url asset_path(@photo.image.url)
