class Api::TrackersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_tracker, only: [:destroy, :update, :show]

  def index
    render json: current_user.trackers
  end
  
  def show
    render json: @tracker
  end

  def create
    @tracker = current_user.trackers.new(tracker_params)
    if(@tracker.save)
      render json: @tracker
    else
      render json: {error: @tracker.errors}, status: 422
    end
  end

  def update
    if(@tracker.update(tracker_params))
      render json: @tracker
    else
      render json: {error: @tracker.errors}, status: 422
    end
  end
  
  def destroy
    render json: @tracker.destroy
  end

  private

  def tracker_params
    params.require(:tracker).permit(:name, :user_id)
  end
  
  def set_tracker
    @tracker = Tracker.find(params[:id])
  end


end
