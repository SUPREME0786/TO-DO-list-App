import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/task-list', pathMatch: 'full' },  // Default route
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-form', component: TaskFormComponent },
  { path: 'task-form/:id', component: TaskFormComponent }      // Edit mode with ID
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
