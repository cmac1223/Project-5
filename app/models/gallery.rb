class Gallery < ApplicationRecord
  belongs_to :user, index: true
  has_many :artworks
end
