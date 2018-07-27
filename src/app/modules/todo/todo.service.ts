import {Injectable} from '@angular/core';
import {removeStrings} from '../../shared/helpers/';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoStorageKey = 'todos';
  public array = [];

  constructor(private todoService: TodoService, private http: HttpClient) {
  }

  addTodo(todoContent) {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    todos.push(todoContent);
    localStorage.setItem(this.todoStorageKey, JSON.stringify(todos));
  }

  getAllTodos() {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    this.array = todos;
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

  getTodosByName(name: string) {
    const todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    const filteredTodos = todos.filter(todo => {
      const trimmedTodo = removeStrings(todo.name);
      return trimmedTodo.includes(name);
    });
    return filteredTodos;
  }

  updateTodo(todoToChange) {
    let todos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
    if (!todos.length) {
      return;
    }
    todos = todos.map(todo => {
      if (todoToChange.name === todo.name) {
        todo.status = todoToChange.status;
      }
      return todo;
    });
    localStorage.setItem(this.todoStorageKey, JSON.stringify(todos));
  }


  // copyPutHttp() {
  //   const jsontodos = JSON.parse(localStorage.getItem(this.todoStorageKey)) || [];
  //
  //   jsontodos = JSON.parse(this.http.put('http://localhost:3000', jsontodos)
  //     .subscribe(console.log('PUT call successful value returned in body')));
  //
  //   this.array = jsontodos;
  //   console.log(array);
  //   return this.array;
  // }
}
