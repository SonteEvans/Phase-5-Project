class MissionParty < ApplicationRecord
  belongs_to :player
  belongs_to :mission
end
