# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  user1_id   :integer          not null
#  user2_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conversation < ActiveRecord::Base
  validates :user1_id, :user2_id, presence: true;

  has_many :messages

  belongs_to(
    :user_1,
    class_name: "User",
    foreign_key: :user1_id,
    primary_key: :id
    )
  belongs_to(
    :user_2,
    class_name: "User",
    foreign_key: :user2_id,
    primary_key: :id
    )

  def other_user(user_id)
    self.user1_id == user_id ? self.user_2 : self.user_1
  end

end
