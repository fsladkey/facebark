class Addgendertousers < ActiveRecord::Migration
  def change
    add_column :users, :gender, :string
  end
end
