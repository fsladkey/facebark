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
  has_many :comments, as: :commentable
  has_many :licks, as: :lickable
  has_many :notifications, as: :notifiable

  def licked_by?(user)
    lick = user.licks.find_by(lickable_id: self.id, lickable_type: "Post")
    return !!lick
  end

  def self.friends_posts(user_id)
    Post.find_by_sql(<<-SQL
      SELECT "posts".*
      FROM "posts"
      WHERE user_id IN (
        SELECT "users"."id"
        FROM "users"
        INNER JOIN "friendships"
        ON "users"."id" = "friendships"."friend_id"
        WHERE "friendships"."user_id" = #{user_id}
      ) OR user_id = #{user_id}
      ORDER BY "posts"."created_at" DESC
    SQL
    )
  end

end
