class GameSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :image
end
