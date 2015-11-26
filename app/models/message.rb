# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  sender_id       :integer          not null
#  body            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  conversation_id :integer
#

class Message < ActiveRecord::Base
  
  belongs_to :conversation

end
