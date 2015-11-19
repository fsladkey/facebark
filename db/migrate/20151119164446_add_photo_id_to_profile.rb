class AddPhotoIdToProfile < ActiveRecord::Migration
  def change
    add_column :profiles, :photo_id, :integer
  end
end
