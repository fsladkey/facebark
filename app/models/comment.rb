class Comment < ActiveRecord::Base
  validates :user_id, :commentable_id, :commentable_type, :body, presence: true

  belongs_to :user
  belongs_to :commentable, polymorphic: true
  has_many :licks, as: :lickable
  has_many :notifications, as: :notifiable

  def licked_by?(user)
    lick = user.licks.find_by(lickable_id: self.id, lickable_type: "Comment")
    return !!lick
  end

end
