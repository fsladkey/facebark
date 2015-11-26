class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.integer :user1_id, null: false, index: true
      t.integer :user2_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
