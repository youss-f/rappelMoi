import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TaskPage } from './task.page';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: TaskPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaskPage]
})
export class TaskPageModule {}
