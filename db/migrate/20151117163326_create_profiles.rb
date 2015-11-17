class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.string :breed
      t.string :hometown
      t.string :gender
      t.text :bio
      t.integer :user_id, null: false;

      t.timestamps null: false
    end
  end
end
