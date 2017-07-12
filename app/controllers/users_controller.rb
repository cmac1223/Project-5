class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users
    end

    def show
      @user = User.find(params[:id])
      # puts hellllllllllllllllllllllo
      puts @user
      render json: {
        user: @user,
        # artworks: @user.gallery.artworks
      }
    end

    def create
      @user = User.new(user_params)

      if @user.save
        redirect_to user_path(@user)
      else
        
        render status: 500,
                json: {
                  error: @user.errors
                }
      end
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render json:{
          user: @user
        }
        end
    end

    def destroy
      @user = User.find(params[:id])
      @user.destroy
    end


    private
    def user_params
      params.require(:user).permit(:First_Name, :Last_Name, :Name, :About)
    end
    
end

