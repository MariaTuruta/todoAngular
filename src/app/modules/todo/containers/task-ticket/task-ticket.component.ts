import { Component, OnInit } from '@angular/core';
import {TodoService} from '../../todo.service';
import {removeStrings} from '../../../../shared/helpers/';

@Component({
  selector: 'app-task-ticket',
  templateUrl: './task-ticket.component.html',
  styleUrls: ['./task-ticket.component.css']
})
export class TaskTicketComponent implements OnInit {
  public result = [];

  constructor(private todoService: TodoService){}

  ngOnInit() {
    //this.onFindTodo('');
    this.result = this.todoService.getAllTodos();
  }

  // onFindTodo(name) {
  //   const trimmedName = name ? removeStrings(name) : '';
  //   this.result = this.todoService.getTodosByName(trimmedName);
  //   //console.log(JSON.stringify(this.result));
  //   console.log(this.result)
  //   return this.result;
  // }

  onDeleteAll() {
    this.todoService.deleteAllTodos();
    this.result = this.todoService.getAllTodos();
    return this.result;
  }

  onDeleteOne(name) {
    const todos = this.todoService.deleteTodo(name);
    this.result = this.todoService.getAllTodos();
    return this.result;
  }
}
