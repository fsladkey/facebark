json.extract! @post, :id, :body, :profile_id
json.time_created @post.created_at.iso8601

json.poster_photo_url asset_path(@post.user.profile_picture.image.url)
json.poster @post.user
json.postee @post.profile.user

json.num_licks @post.licks.count
json.licked @post.licked_by?(current_user)

json.licks @post.licks do |lick|
  json.author_name "#{lick.user.firstname} #{lick.user.lastname}"
  json.author_username lick.user.username
end

json.comments @post.comments.reverse do |comment|
  json.extract! comment, :id, :body
  json.user comment.user
  json.num_licks comment.licks.count
  json.licked comment.licked_by?(current_user)
  json.user_photo_url comment.user.profile_picture.image.url
end
