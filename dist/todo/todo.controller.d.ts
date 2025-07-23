import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getAllTodos(): CreateTodoDto[];
    createTodo(createTodoDto: CreateTodoDto): CreateTodoDto;
    updateTodo(id: string, updateTodoDto: UpdateTodoDto): CreateTodoDto;
    deleteTodo(id: string): {
        message: string;
    };
}
