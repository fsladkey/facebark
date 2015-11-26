# == Schema Information
#
# Table name: messages
#
#  id          :integer          not null, primary key
#  sender_id   :integer          not null
#  receiver_id :integer          not null
#  body        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Message < ActiveRecord::Base
end
