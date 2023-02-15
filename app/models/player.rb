class Player < ApplicationRecord
    has_many :posts
    has_many :games, through: :posts

    has_many :missionParties
    has_many :missions, through: :missionParties

    has_many :comments
    has_many :missions, through: :comments

    has_secure_password
end
