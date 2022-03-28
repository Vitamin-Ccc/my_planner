class Expense < ApplicationRecord
  belongs_to :user
  default_scope { order('created_at DESC') }
end
