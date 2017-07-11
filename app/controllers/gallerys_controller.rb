class GallerysController < ApplicationController
  def index
      @gallerys = Gallyer.all
      render json: @gallerys
    end

    def show
      @gallery = Gallery.find(params[:id])
      render json: {
                    user: @gallery
                    }
    end
end
