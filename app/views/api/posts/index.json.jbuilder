json.array! @posts do |post|
  json.extract! post, :id, :body, :profile_id

  json.poster post.user
  json.postee post.profile.user
end
