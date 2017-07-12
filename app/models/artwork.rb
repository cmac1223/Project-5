class Artwork < ApplicationRecord
  belongs_to :gallery, dependent: :destroy
end
