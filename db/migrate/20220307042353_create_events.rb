class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.text :description
      t.float :money
      t.date :time
      t.string :category

      t.timestamps
    end
  end
end
