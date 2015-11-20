# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  breed      :string
#  hometown   :string
#  bio        :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo_id   :integer
#

class Profile < ActiveRecord::Base
  validates :user, presence: true

  belongs_to :user
  has_many :posts

  def cover_photo
    Photo.find(self.photo_id)
  end

end
