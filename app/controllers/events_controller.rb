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
end
