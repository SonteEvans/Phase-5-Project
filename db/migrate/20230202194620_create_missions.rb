class CreateMissions < ActiveRecord::Migration[7.0]
  def change
    create_table :missions do |t|
      t.string :title
      t.string :description
      t.belongs_to :game

      t.timestamps
    end
  end
end
