class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.belongs_to :player
      t.belongs_to :mission

      t.timestamps
    end
  end
end
