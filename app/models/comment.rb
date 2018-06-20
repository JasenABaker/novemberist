class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :wip
  belongs_to :short
  belongs_to :blog
end
