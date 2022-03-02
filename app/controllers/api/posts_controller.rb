class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:destroy, :update, :show]

  def index
    render json: current_user.posts
  end
  
  def show
    render json: @post
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render json: @post
    else
      render json: {error: @post.errors}, status: 422
    end
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: {error: @post.errors}, status: 422
    end
  end
  
  def destroy
    render json: @post.destroy
  end

  private

  def post_params
    params.require(:post).permit(:content, :create_at, :user_id)
  end
  
  def set_post
    @post = Post.find(params[:id])
  end

end
