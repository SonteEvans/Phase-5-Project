class CreatePlayers < ActiveRecord::Migration[7.0]
  def change
    create_table :players do |t|
      t.string :alias
      t.string :avatar
      t.string :username
      t.string :password_digest
      t.integer :level

      t.timestamps
    end
  end
end
