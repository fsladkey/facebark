# == Schema Information
#
# Table name: notifications
#
#  id              :integer          not null, primary key
#  user_id         :integer
#  notifiable_id   :integer
#  notifiable_type :string
#  viewed          :boolean          default(FALSE)
#

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

  def content_id
    if self.notifiable_type == "Post"
      return self.notifiable_id
    elsif self.notifiable_type == "Comment"
      return self.notifiable.commentable_id
    elsif self.notifiable_type == "Lick"
      return self.notifiable.lickable_type == "Comment" ? self.notifiable.lickable.commentable_id : self.notifiable.lickable_id
    end
  end

  def content_type
    if self.notifiable_type == "Post"
      return "Post"
    elsif self.notifiable_type == "Comment"
      return self.notifiable.commentable_type
    elsif self.notifiable_type == "Lick"
      return self.notifiable.lickable_type == "Comment" ? self.notifiable.lickable.commentable_type : self.notifiable.lickable_type
    end
  end

end
