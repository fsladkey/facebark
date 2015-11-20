# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  profile_id :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  belongs_to :user
  belongs_to :profile

  def self.friends_posts(user_id)
    Post.where("user_id IN ?", User.find(user_id).friends.select(:id).to_sql)

    Post.find_by_sql(<<-SQL
      SELECT "posts".*
      FROM "posts"
      WHERE user_id IN (
        SELECT "users"."id"
        FROM "users"
        INNER JOIN "friendships"
        ON "users"."id" = "friendships"."friend_id"
        WHERE "friendships"."user_id" = #{user_id}
      )
    SQL
    )
  end

end
