class Api::ExpensesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_tracker
  before_action :set_expense, only: [:show, :update, :destroy]

  def index
    render json: @tracker.expenses.order(transaction_date: :desc)
  end

  def show
    render json: @expense
  end

  def create
    @expense = @tracker.expenses.new(expense_params)
    if(@expense.save)
      render json: @expense
    else
      render json: {errors: @expense.errors}, status: 422
    end
  end

  def update
    if(@expense.update(expense_params))
      render json: @expense
    else
      render json: {errors: @expense.errors}, status: 422
    end
  end

  def destroy
    render json: @expense.destroy
  end

  private

  def expense_params
    params.require(:expense).permit(:name, :description, :price, :transaction_date, :tracker_id)
  end

  def set_tracker
    @tracker = Tracker.find(params[:tracker_id])
  end

  def set_expense
    @expense = @tracker.expenses.find(params[:id])
  end
end
