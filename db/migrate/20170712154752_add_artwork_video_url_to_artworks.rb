class AddArtworkVideoUrlToArtworks < ActiveRecord::Migration[5.1]
  def change
    add_column :artworks, :artwork_video_url, :string
  end
end
