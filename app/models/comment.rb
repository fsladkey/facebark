class Comment < ActiveRecord::Base
  validates :user_id, :commentable_id, :commentable_type, :body, presence: true

  belongs_to :user
  belongs_to :commentable, polymorphic: true
  has_many :licks, as: :lickable
end
