class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :location
      t.datetime :time

      t.timestamps
    end
  end
end
