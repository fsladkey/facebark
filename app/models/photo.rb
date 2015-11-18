class Photo < ActiveRecord::Base
  validates :album, presence: true y 
  validates :photo, attachment_presence: true
  # validates_with AttachmentPresenceValidator, attributes: :photo
  # validates_with AttachmentSizeValidator, attributes: :avatar, less_than: 1.megabytes

  belongs_to :album

  has_attached_file :photo, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
end
