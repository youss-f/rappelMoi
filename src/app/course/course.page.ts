import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Task } from '../../models/task';
import { Elements } from '../../models/elements';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage implements OnInit {

  course : Elements = new Elements() ;

  courses: Elements [] = [];

  task :any;

  tasks :Task[] = [];

  constructor(private route: ActivatedRoute ,
              private taskService: TaskService) {

               }

  ngOnInit() {
      }

  ionViewWillEnter(){
    
  }

  saveCourse(){

  }

}
