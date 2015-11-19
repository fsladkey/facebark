class Addpermanentcolumntoalbums < ActiveRecord::Migration
  def change
    add_column :albums, :permanent, :boolean, default: false
  end
end
