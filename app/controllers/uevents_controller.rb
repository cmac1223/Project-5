class UeventsController < ApplicationController
  def create
    @users = params["users"]
    event_id = params["event_id"]
    # puts @users
    @users.each do |user|
      Uevent.create(user_id: user["id"], event_id: event_id)
    end
    render json: @users
  end
end
