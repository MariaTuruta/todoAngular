import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../../todo.service';
import {removeStrings} from '../../../../shared/helpers/';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-task-ticket',
  templateUrl: './task-ticket.component.html',
  styleUrls: ['./task-ticket.component.css']
})
export class TaskTicketComponent implements OnInit {
  @Input() todo;
  @Output() onDelete = new EventEmitter();
  @Output() onUpdate = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  deleteTodo() {
    this.onDelete.emit(this.todo.name);
  }

  changeToDo(param) {
    this.todo.status = param;
    this.onUpdate.emit(this.todo);
  }
}
