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

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
