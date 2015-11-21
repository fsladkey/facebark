class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|

      t.text :body
      t.integer :user_id, index: true
      t.references :commentable, polymorphic: true, index: true
      t.timestamps null: false

      t.timestamps null: false
    end
  end
end
