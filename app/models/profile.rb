class Profile < ActiveRecord::Base
  validates :user, presence: true

  belongs_to :user

  def cover_photo
    Photo.find(self.photo_id)
  end

end
