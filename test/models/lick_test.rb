# == Schema Information
#
# Table name: licks
#
#  id            :integer          not null, primary key
#  user_id       :integer
#  lickable_id   :integer
#  lickable_type :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class LickTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
