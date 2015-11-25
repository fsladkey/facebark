class Notification < ActiveRecord::Base
  validates :user_id, :notifiable_id, :notifiable_type, presence: true

  belongs_to :user
  belongs_to :notifiable, polymorphic: true

  has_one(
    :poster,
    through: :notifiable,
    source: :user
    )

  def description
    if self.notifiable_type == "Post"
      return "#{self.notifiable.user.full_name} has posted on your wall. #{content_preview(self.notifiable.body)}"
    elsif self.notifiable_type == "Comment"
      return "#{self.notifiable.user.full_name} has commented on your #{self.notifiable.commentable_type.downcase}. #{content_preview(self.notifiable.body)}"
    elsif self.notifiable_type == "Lick"
      return "#{self.notifiable.user.full_name} has licked your #{self.notifiable.lickable_type.downcase}."
    end
  end

  def content_preview(text)
    length = text.length
    text = text.slice(0, 15)
    if length > 15
      text += "..."
    end
    "\"#{text}\""
  end
end
