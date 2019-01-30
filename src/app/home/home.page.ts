import { Component,OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { NavController } from '@ionic/angular';
import { TaskService } from '../../services/task.service';
import { TaskPage} from '../task/task.page';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private taskService: TaskService,
              private router: Router){

               }

  //création d'une tache
  task :Task = new Task();
  // liste des taches
  tasks: Task[] = [];
  // affichage newtask
  active : boolean = false;

  ngOnInit(){
    this.taskService.getTasks().then(
      tasks => {
        if(null !== tasks){
          this.tasks=tasks;
        }
      }
    )
  }

  ionViewWillEnter(){
    this.taskService.getTasks().then(
      tasks => {
        if(null !== tasks){
          this.tasks=tasks;
        }
      }
    )
  }



  gotoNewTask(){
    this.router.navigate(["/task"]);
  }


  removeTask(id : number){
    for(let task of this.tasks){
      if(task.id===id) this.tasks = this.tasks.filter(obj => obj !== task);
      }
    //console.log(this.tasks);
    this.taskService.saveTasks(this.tasks);
   }


   gotoTask(task : Task){
     this.router.navigate(["/task", task]);
   }

}
