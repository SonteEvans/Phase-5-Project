class Game < ApplicationRecord
    has_many :posts
    has_many :players, through: :posts

    has_many :missions
end
