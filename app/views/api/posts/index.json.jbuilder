json.array! @posts do |post|
  json.extract! post, :id, :body, :profile_id

  json.poster_photo_url asset_path(post.user.profile_picture.image.url)
  json.poster post.user
  json.postee post.profile.user

  json.num_licks post.licks.count
  
  json.licks post.licks do |lick|
    json.author_name "#{lick.user.firstname} #{lick.user.lastname}"
  end

  json.comments post.comments.reverse do |comment|
    json.extract! comment, :id, :body
    json.user comment.user
    json.user_photo_url comment.user.profile_picture.image.url
  end

end
