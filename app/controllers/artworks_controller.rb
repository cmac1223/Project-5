class ArtworksController < ApplicationController
  def index
    @artworks = @user.artworks 
     
    render json: @artworks
  end

  def show
    @user = User.find(params[:id])
    @artworks = @user.artworks
    render json: @artwork 
  end
    

  def create
    @user = User.find(params[:user_id])
    @artwork = @user.artworks.new(artwork_params)
    @artwork.save
  end

      
  
end
