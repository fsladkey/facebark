class AddPhotoIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :photo_id, :integer
  end
end
