import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './modules/home/containers/home/home.component';
import {TodoDetailsComponent} from './core/todo-details/todo-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: './modules/todo/todo.module#TodoModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },
  {
    path: 'contact',
    loadChildren: './modules/contact/contact.module#ContactModule'
  },
  {
    path: 'todo/:id',
    component: TodoDetailsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];
export const appRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
