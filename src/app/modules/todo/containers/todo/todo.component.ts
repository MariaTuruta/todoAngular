import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {removeStrings} from '../../../../shared/helpers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;
  public result = [];

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      date: new Date(),
      description: ['', Validators.required]
    });

    this.onFindTodo('');
    this.result = this.todoService.getAllTodos();
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.submitted = true;
    const data = this.contactForm.value;

    this.todoService.addTodo(data);
    this.result = this.todoService.getAllTodos();

    //alert('SUCCESS!\n\n' + JSON.stringify(this.contactForm.value));
  }

  onDeleteAll() {
    this.todoService.deleteAllTodos();
    this.result = this.todoService.getAllTodos();
  }

  onDeleteOne(name) {
    const todos = this.todoService.deleteTodo(name);
    this.result = this.todoService.getAllTodos();
  }

  onFindTodo(name) {
    const trimmedName = name ? removeStrings(name) : '';
    this.result = this.todoService.getTodosByName(trimmedName);
    console.log(this.result)
  }
}
