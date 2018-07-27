import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './containers/todo/todo.component';
import { TaskTicketComponent } from './containers/task-ticket/task-ticket.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: TodoComponent
    }])
  ],
  declarations: [TodoComponent, TaskTicketComponent]
})
export class TodoModule { }
