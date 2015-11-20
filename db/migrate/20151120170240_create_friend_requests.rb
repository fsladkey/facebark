class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
      t.integer :user_id, null: false, index: true
      t.integer :friend_id, null: false, index: true
      t.boolean :approved, default: false

      t.timestamps null: false
    end
  end
end
