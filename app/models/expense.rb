class Expense < ApplicationRecord
  belongs_to :tracker
  default_scope { order('created_at DESC') }
end
