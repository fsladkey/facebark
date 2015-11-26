# == Schema Information
#
# Table name: friend_requests
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ActiveRecord::Base
  validates :user, :friend, presence: true

  belongs_to :user

  belongs_to(
    :friend,
    class_name: "User",
    foreign_key: :friend_id,
    primary_key: :id
    )

  def approve!
    self.user.friendships.create!(friend_id: self.friend.id)
    self.friend.friendships.create!(friend_id: self.user.id)
    self.destroy!
  end

end
