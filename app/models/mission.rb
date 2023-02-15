class Mission < ApplicationRecord
    has_many :missionParties
    has_many :players, through: :missionParties

    has_many :comments
    has_many :players, through: :comments

    belongs_to :game
end
