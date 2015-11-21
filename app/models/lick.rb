class Lick < ActiveRecord::Base
  validates :user_id, :lickable_id, :lickable_type, :body, presence: true

  belongs_to :lickable, polymorphic: true
end
