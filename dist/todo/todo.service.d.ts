import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
import { Model } from "mongoose";
import { Todo } from "src/schema/todo.schema";
export declare class TodoService {
    private todoModel;
    private todos;
    private nextId;
    constructor(todoModel: Model<Todo>);
    getAllTodos(): CreateTodoDto[];
    createTodo(createTodoDto: CreateTodoDto): CreateTodoDto;
    updateTodo(id: number, updateTodoDto: UpdateTodoDto): CreateTodoDto;
    deleteTodo(id: number): void;
}
