class RemoveGenderFromProfile < ActiveRecord::Migration
  def change
    remove_column :profiles, :gender
  end
end
