import {
  IsString,
  IsOptional,
  IsBoolean,
  IsNumber,
  Length,
} from "class-validator";

export class CreateTodoDto {
  @IsNumber()
  id: number;

  @IsString()
  @Length(5, 100, { message: "Title must be between 1 and 100 characters" })
  title!: string;

  @IsOptional({ message: "Completed status is optional" })
  @IsBoolean()
  completed?: boolean;
}
