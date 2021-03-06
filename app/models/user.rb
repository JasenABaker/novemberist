class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
  has_many :comments, dependent: :destroy
  has_many :collections, dependent: :destroy
  has_many :blogs, dependent: :destroy
  has_many :wips, dependent: :destroy
end
