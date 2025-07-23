import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TodoController } from "./todo/todo.controller";
import { TodoService } from "./todo/todo.service";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot("mongodb://localhost:27017/todo")],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
