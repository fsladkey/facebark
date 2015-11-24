# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  album_id           :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Photo < ActiveRecord::Base
  has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "default-photo.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :album
  has_many :comments, as: :commentable
  has_many :licks, as: :lickable

  def licked_by?(user)
    lick = user.licks.find_by(lickable_id: self.id, lickable_type: "Photo")
    return !!lick
  end

end
