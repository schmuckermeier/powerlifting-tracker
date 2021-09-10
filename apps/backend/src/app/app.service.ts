import { Injectable } from '@nestjs/common';
import {Todo} from "@getstrong/dtos";

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo 1' }, { title: 'Todo 2' }];

  getData(): Todo[] {
    return this.todos;
  }

  addTodo():Todo {
    const title = `New todo ${Math.floor(Math.random() * 1000)}`;
    this.todos.push({title});
    return {title};
  }
}
