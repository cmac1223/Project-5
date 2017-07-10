class UsersController < ApplicationController
    def index
      @users = User.all
      render json: @users
    end

    def show
      @user = User.find(params[:id])
      render json: {
                    user: @user
                    }
    end

    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render json:{
          user: @user
        }
        end
    end

    private
    def user_params
      params.require(:user).permit(:First_Name, :Last_Name, :Name, :About)
    end
    
end

