import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { UpdateTodoDto } from "./dto/update-todo.dto";

@Controller("todo")
// @UsePipes(new ValidationPipe({ whitelist: true }))
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get("")
  getAllTodos() {
    return this.todoService.getAllTodos();
  }
  @UsePipes(ValidationPipe)
  @Post("")
  createTodo(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDto);
  }

  @Patch(":id")
  updateTodo(@Param("id") id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.updateTodo(+id, updateTodoDto);
  }

  @Delete(":id")
  deleteTodo(@Param("id") id: string): { message: string } {
    this.todoService.deleteTodo(Number(id));
    return { message: "Todo deleted successfully" };
  }
}
