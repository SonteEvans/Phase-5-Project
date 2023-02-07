class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :alias, :avatar, :username, :password_digest
end
