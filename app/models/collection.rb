class Collection < ApplicationRecord
  belongs_to :user
  has_many :shorts, dependent: :destroy
end
