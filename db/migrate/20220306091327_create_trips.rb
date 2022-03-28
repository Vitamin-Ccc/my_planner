class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.text :description
      t.date :start_date
      t.date :end_date
      t.string :cover_image
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
