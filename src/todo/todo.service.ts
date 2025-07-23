import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Todo } from "src/schema/todo.schema";

@Injectable()
export class TodoService {
  private todos: CreateTodoDto[] = [];
  private nextId = 1;

  constructor(@InjectModel(Todo.name) private todoModel: Model<Todo>) {}
  getAllTodos(): CreateTodoDto[] {
    return this.todos;
  }

  createTodo(createTodoDto: CreateTodoDto): CreateTodoDto {
    const newTodo: CreateTodoDto = {
      id: this.nextId++,
      title: createTodoDto.title,
      completed: createTodoDto.completed ?? false,
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id: number, updateTodoDto: UpdateTodoDto): CreateTodoDto {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo) {
      throw new NotFoundException("Todo not found");
    }

    if (updateTodoDto.title !== undefined) {
      todo.title = updateTodoDto.title;
    }

    if (updateTodoDto.completed !== undefined) {
      todo.completed = updateTodoDto.completed;
    }

    return todo;
  }

  deleteTodo(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) {
      throw new NotFoundException("Todo not found");
    }
    this.todos.splice(index, 1);
  }
}
