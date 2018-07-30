import {Injectable} from '@angular/core';
import {removeStrings} from '../../shared/helpers/';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoStorageKey = 'todos';
  public array: any;

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

/*  postTodosOnServer() {
    this.array = this.http.post('http://localhost:3000/todos', {
      'id': '6',
      'name': 'myitem',
      'status': 'unfinished',
      'date': '2018-07-26T13:28:55.768Z',
      'description': 'faaaaaaa'
    });

    console.log(this.array);
    return this.array;
  }

  putTodosOnServer() {
    this.array = this.http.put('http://localhost:3000/todos/:id', {
      'id': '6',
      'name': 'yyyyyyyyyytem',
      'status': 'unfinished',
      'date': '2018-07-26T13:28:55.768Z',
      'description': 'faaaaaaa'
    });

    console.log(this.array);
    return this.array;
  }

  getTodosFromServer() {
    return this.http.get('http://localhost:3000/todos');
  }*/
}
