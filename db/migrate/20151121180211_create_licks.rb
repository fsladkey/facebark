class CreateLicks < ActiveRecord::Migration
  def change
    create_table :licks do |t|
      t.integer :user_id, index: true
      t.references :lickable, polymorphic: true, index: true

      t.timestamps null: false
    end
  end
end
