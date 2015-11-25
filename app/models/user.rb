# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  firstname       :string           not null
#  lastname        :string           not null
#  birthday        :date             not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  gender          :string
#  photo_id        :integer
#

class User < ActiveRecord::Base
  attr_reader :password

  after_initialize :ensure_session_token

  validate :valid_email_address

  validates(
    :username,
    :email,
    :firstname,
    :lastname,
    :birthday,
    :password_digest,
    :session_token,
    presence: true
    )

    validates(
      :username,
      :email,
      :session_token,
      uniqueness: true
    )

    validates(
      :password,
      length: { minimum: 6, allow_nil: true}
    )

    has_one :profile

    has_many :albums
    has_many :posts
    has_many :comments
    has_many :licks
    has_many :notifications

    has_many(
      :friend_requests,
      class_name: "FriendRequest",
      foreign_key: :friend_id,
      primary_key: :id
      )

    has_many(
      :requested_friends,
      class_name: "FriendRequest",
      foreign_key: :user_id,
      primary_key: :id
      )


    has_many(
      :friendships,
      class_name: "Friendship",
      foreign_key: :user_id,
      primary_key: :id
      )

    has_many(
      :friends,
      through: :friendships,
      source: :friend
      )

    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      user ||= User.find_by(email: username)
      user && user.valid_password?(password) ? user : nil
    end

    def self.find_by_search_string(search_string)
      search_string.downcase!
      User.where(<<-SQL
        LOWER( username ) LIKE '%#{search_string}%' OR
        LOWER( firstname ) LIKE '%#{search_string}%' OR
        LOWER( lastname ) LIKE '%#{search_string}%'
      SQL
      )
    end

    def all_shown_notifications
      notifications = self.notifications.where(viewed: false)
      notifications = notifications + self.notifications.
        where(viewed: true).
        limit(notifications.length > 10 ? 0 : 10 - notifications.length).
        reverse
    end

    def new_notifications
      self.notifications.where(viewed: false).count
    end

    def set_up!
      profile = Profile.create!(user_id: self.id)

      profile_photos = Album.create!(user_id: self.id, title: "Profile Photos", permanent: true)
      cover_photos = Album.create!(user_id: self.id, title: "Cover Photos", permanent: true)
      Album.create!(user_id: self.id, title: "#{self.firstname.capitalize}'s First Photo Album")

      default_profile_picture = profile_photos.photos.create!
      default_cover_photo = cover_photos.photos.create!
      self.photo_id = default_profile_picture.id
      profile.photo_id = default_cover_photo.id
      profile.save!
    end

    def full_name
      "#{self.firstname} #{self.lastname}"
    end

    def profile_picture
      Photo.find(self.photo_id)
    end

    def is_friend?(user_id)
      !!self.friends.find_by(id: user_id)
    end

    def friendship_requested?(user_id)
      !!self.requested_friends.find_by(friend_id: user_id)
    end

    def friendship_request_id(user_id)
      self.requested_friends.find_by(friend_id: user_id).id
    end

    def unfriend(user_id)
      self.friendships.find_by(friend_id: user_id).destroy!
      User.find(user_id).friendships.find_by(friend_id: self.id).destroy!
    end

    def friend(friend_id)
      self.friendships.create!(friend_id: friend_id)
      User.find(friend_id).friendships.create!(friend_id: self.id)
    end

    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
      self.session_token = SecureRandom::urlsafe_base64
      self.save!
      self.session_token
    end

    private

    def ensure_session_token
      self.session_token ||= SecureRandom::urlsafe_base64
    end

    def valid_email_address
      #to be implemented, should always check client side though so not super important.
      true
    end


end
