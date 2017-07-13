class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
    # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :uevents, dependent: :destroy
  has_many :events, through: :uevents, dependent: :destroy
  # has_many :artworks
  has_one :gallery, dependent: :destroy

before_save -> do
    # self.uid = SecureRandom.uuid
    skip_confirmation!
  end

end


