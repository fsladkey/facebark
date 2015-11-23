class RemoveApprovedFromFriendRequests < ActiveRecord::Migration
  def change
    remove_column :friend_requests, :approved
  end
end
