class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :user_id
      t.references :notifiable, polymorphic: true, index: true
    end
  end
end
