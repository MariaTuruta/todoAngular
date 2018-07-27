import {Injectable} from '@angular/core';
import {removeStrings} from '../../shared/helpers/';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoStorageKey = 'todos';
  public array = [];
  constructor(private todoService: TodoService) {
  }

  addTodo(todoContent) {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    todos.push(todoContent);
    localStorage.setItem(this.todoStorageKey, JSON.stringify(todos));
  }

  getAllTodos() {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    this.array = todos ;
    return this.array;
  }

  deleteTodo(name: string) {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    const resultedTodos = todos.filter(todo => todo.name !== name);
    localStorage.setItem(this.todoStorageKey, JSON.stringify(resultedTodos));
    return resultedTodos;
  }

  deleteAllTodos() {
    localStorage.removeItem(this.todoStorageKey);
  }

  // getTodosByName(name: string) {
  //   const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
  //   const filteredTodos = todos.filter(todo => {
  //     const trimmedTodo = removeStrings(todo.name);
  //     return trimmedTodo.includes(name);
  //   });
  //   return filteredTodos;
  // }
}
