import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {

  id : string;
  //création d'une tache
  task : any;
  // liste des taches
  tasks: Task[] = [];
  tasks2: Task[] = [];

  constructor(private route: ActivatedRoute ,
              private taskService: TaskService) {
              }


  ngOnInit() {
    this.route.params.subscribe(data =>{
      this.task=data;
      console.log(this.task);
    }
  );
}


ionViewWillEnter(){

}


}
