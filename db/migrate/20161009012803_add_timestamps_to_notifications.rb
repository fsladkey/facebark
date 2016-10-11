class AddTimestampsToNotifications < ActiveRecord::Migration
  def change
    add_timestamps :notifications
  end
end
