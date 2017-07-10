class Event < ApplicationRecord
  has_many :uevents
  has_many :users, through: :uevents
end
