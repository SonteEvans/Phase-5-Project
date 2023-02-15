class MissionParty < ApplicationRecord
  belongs_to :player
  belongs_to :mission

  #validate :user, length: { maximum: 4 }
end
