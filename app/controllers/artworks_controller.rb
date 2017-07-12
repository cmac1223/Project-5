class ArtworksController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    # @artworks = Artwork.find(params[:gallary_id])
    if @user.gallery
      render json: @user.gallery.artworks
    else
      render status: 500, json: {error: "No gallery exists for #{@user.name}"}
    end
    @artworks = @user.gallery.artworks
  end

  def show
    @user = User.find(params[:user_id])
    @artwork = Artwork.find(params[:id])
    render json: @artwork 
  end
    

  def create
    @user = User.find(params[:user_id])
    @artwork = @user.gallery.artworks.new(artwork_params)
    @artwork.save
    render json: {artwork: @artwork}
  end

  def update
    # @user = User.find(params[:user_id])
    # @gallery = @user.gallery.artworks.find(params[:id])
    @artwork = Artwork.find(params[:id])
    if @artwork.update(artwork_params)
      render json: { artwork: @artwork}
      else
      render status: 500, json: {error: @artwork.errors}
    end
  end

  def destroy
    @artwork = Artwork.find(params[:id])
    if @artwork.destroy
      render json: {message: 'Successfully deleted artwork'}
    else
      render status: 500, json: {error: 'Could not delete Artwork'}
    end

  end

  private
  def artwork_params
    params.require(:artwork).permit(:photo, :paintings, :demo)
  end

      
  
end
