class EventsController < ApplicationController
  def index
    @events = Event.all
    render json: @events
  end

  def show
    @event = Event.find(params[:id])
    @users = @event.users
    render json: {event: @event,
                  users: @users
                }
  end

  def create
    @event = Event.create(event_params)
    @users = params["users"]

    #make a new uevent for each user in @users, with event_id equal to @event.id
    @users.each do |user|
      Uevent.create(user_id: user.id, event_id: @event.id)
    end
  end

  private
  def event_params
    params.require(:event)
          .permit(:location, :time)
  end
end
