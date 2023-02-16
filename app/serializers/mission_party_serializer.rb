class MissionPartySerializer < ActiveModel::Serializer
  attributes :id
  has_one :player
  has_one :mission
end
