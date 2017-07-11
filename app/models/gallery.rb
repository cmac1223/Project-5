class Gallery < ApplicationRecord
  belongs_to :user
  has_many :artwork
end
