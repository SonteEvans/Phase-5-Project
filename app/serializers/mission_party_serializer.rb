class MissionPartySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :mission
end
