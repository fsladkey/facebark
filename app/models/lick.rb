# == Schema Information
#
# Table name: licks
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  lickable_id   :integer
#  lickable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Lick < ActiveRecord::Base
  validates :user_id, :lickable_id, :lickable_type, presence: true

  belongs_to :user
  belongs_to :lickable, polymorphic: true
  has_many :notifications, as: :notifiable
end
