class Api::TodosController < ApplicationController

  def index
    @todo = Todo.all
    render json: @todo
  end

  def show
    render json: Todo.find(params[:id])
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors.full_messages, status: 422
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      render json: @todo
    else
      render text: "you can't destroy what doesn't exist!"
    end 
  end

  private
  def todo_params
    params.require(:todos).permit(:title, :body, :done)
  end

end
