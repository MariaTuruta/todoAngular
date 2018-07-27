import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../../todo.service';
import {removeStrings} from '../../../../shared/helpers/';

@Component({
  selector: 'app-task-ticket',
  templateUrl: './task-ticket.component.html',
  styleUrls: ['./task-ticket.component.css']
})
export class TaskTicketComponent implements OnInit {
  @Input() todo;
  @Output() onDelete = new EventEmitter();

  constructor(private todoService: TodoService){}

  ngOnInit() {
    this.onFindTodo('');
    // this.result = this.todoService.getAllTodos();
    // return this.result;
  }

  onFindTodo(name) {
  const trimmedName = name ? removeStrings(name) : '';
    // this.result = this.todoService.getTodosByName(trimmedName);
    // console.log(this.result)
    // return this.result;
  }

  deleteTodo(){
    this.onDelete.emit(this.todo.name);
  }

}
