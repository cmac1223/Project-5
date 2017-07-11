class ArtworksController < ApplicationController
  def index
    @gallery = Gallery.find(params[:gallery_id])
    @artworks = @artwork.song.all 
    render json: @artworks
  end

  def show
    @gallery = Gallery.find(params[:gallery_id])
    @artwork = Artwork.find(params[:id])
    render json: @artwork 
  end

  # def create
  #   @gallery = Gallery.find(params[:gallery_id])
  #   @artwork = @gallery.songs.new(artwork_params)

  #   if @artwork.save
  #     redirect_to artis
  # end
end
