import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'new-task', loadChildren: './new-task/new-task.module#NewTaskPageModule' },
  { path: 'task', loadChildren: './task/task.module#TaskPageModule' },
  { path: 'course', loadChildren: './course/course.module#CoursePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
