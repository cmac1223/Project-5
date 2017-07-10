class CreateArtworks < ActiveRecord::Migration[5.1]
  def change
    create_table :artworks do |t|
      t.references :gallery, foreign_key: true
      t.string :paintings
      t.string :photos
      t.string :demo

      t.timestamps
    end
  end
end
