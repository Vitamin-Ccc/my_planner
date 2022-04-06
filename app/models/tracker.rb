class Tracker < ApplicationRecord
  belongs_to :user
  has_many :expenses, dependent: :destroy
  default_scope { order('created_at DESC') }
end
