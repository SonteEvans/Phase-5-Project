class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :content
      t.belongs_to :game
      t.belongs_to :player
      t.timestamps
    end
  end
end
