class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true, index: true
      t.string :email, null: false, unique: true, index: true
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.date :birthday, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true, index: true

      t.timestamps null: false
    end
  end
end
