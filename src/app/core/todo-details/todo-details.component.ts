import {Component, OnInit, OnDestroy} from '@angular/core';
import {TodoService} from '../../modules/todo/todo.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit, OnDestroy {
  private subscription: any;
  name: string;
  todo: any;
  todos: any;
  show: boolean;

  constructor(private todoService: TodoService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
        this.name = params['id'];
        this.todo = this.todoService.getTodosByName(this.name);
        for (let i = 0; i < this.todo.length; i++) {
          if (this.todo[i].name === this.name) {
            this.todos = this.todo[i];
            if (this.todos.status == 'finished') {
              this.show = true;
            }
          }
          console.log(this.todos);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
