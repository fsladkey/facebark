# == Schema Information
#
# Table name: comments
#
#  id               :integer          not null, primary key
#  body             :text
#  user_id          :integer
#  commentable_id   :integer
#  commentable_type :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

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
