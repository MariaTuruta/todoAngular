import {Component, OnInit, OnDestroy} from '@angular/core';
import {TodoService} from '../../todo.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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
    //console.log(this.todoService.getAllTodos());

    //alert('SUCCESS!\n\n' + JSON.stringify(this.contactForm.value));
  }


}
