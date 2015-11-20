# == Schema Information
#
# Table name: profiles
#
#  id         :integer          not null, primary key
#  breed      :string
#  hometown   :string
#  bio        :text
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo_id   :integer
#

require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
