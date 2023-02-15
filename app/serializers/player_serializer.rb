class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :alias, :avatar, :username
end
