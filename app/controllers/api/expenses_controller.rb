class Api::ExpensesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_expense, only: [:destroy, :update, :show]

  def index
    render json: current_user.expenses
  end
  
  def show
    render json: @expense
  end

  def create
    @expense = current_user.expenses.new(expense_params)
    if(@expense.save)
      render json: @expense
    else
      render json: {error: @expense.errors}, status: 422
    end
  end

  def update
    if(@expense.update(expense_params))
      render json: @expense
    else
      render json: {error: @expense.errors}, status: 422
    end
  end
  
  def destroy
    render json: @expense.destroy
  end

  private

  def expense_params
    params.require(:expense).permit(:name, :description, :price, :transaction_date, :user_id)
  end
  
  def set_expense
    @expense = Expense.find(params[:id])
  end
end
