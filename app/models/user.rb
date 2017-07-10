class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :uevents
  has_many :events, through: :uevents
  has_one :gallery
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
