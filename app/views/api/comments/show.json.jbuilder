json.extract! @comment, :id, :body, :commentable_id, :commentable_type
json.user @comment.user
json.num_licks @comment.licks.count
json.licked @comment.licked_by?(current_user)
json.user_photo_url @comment.user.profile_picture.image.url
