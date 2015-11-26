class Conversation < ActiveRecord::Base
  validates :user1_id, :user2_id, presence: true;

  has_many :messages

  belongs_to :user_1
  belongs_to :user_2

end
