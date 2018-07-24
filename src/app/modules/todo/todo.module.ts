import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './containers/todo/todo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }
