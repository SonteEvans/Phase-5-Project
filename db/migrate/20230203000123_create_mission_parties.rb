class CreateMissionParties < ActiveRecord::Migration[7.0]
  def change
    create_table :mission_parties do |t|
      t.belongs_to :player, null: false, foreign_key: true
      t.belongs_to :mission, null: false, foreign_key: true

      t.timestamps
    end
  end
end
