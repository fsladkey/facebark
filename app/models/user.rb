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

    def self.find_by_credentials(username, password)
      user = User.find_by(username: username)
      user ||= User.find_by(email: username)
      user && user.valid_password?(password) ? user : nil
    end

    def self.find_by_search_string(search_string)
      search_string.downcase!
      User.where(<<-SQL
        LOWER( username ) LIKE '#{search_string}%' OR
        LOWER( firstname ) LIKE '#{search_string}%' OR
        LOWER( lastname ) LIKE '#{search_string}%'
      SQL
      )
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
