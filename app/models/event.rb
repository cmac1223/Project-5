class Event < ApplicationRecord
  has_many :uevents, dependent: :destroy
  has_many :users, through: :uevents, dependent: :destroy
end
