class Short < ApplicationRecord
  belongs_to :collection
  has_many :comments, dependent: :destroy
end
