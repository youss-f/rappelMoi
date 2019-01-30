import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { NavController } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.page.html',
  styleUrls: ['./new-task.page.scss'],
})
export class NewTaskPage implements OnInit {

  constructor(private taskService: TaskService,
              public navCtrl: NavController,
              public localNotifications: LocalNotifications) {
                this.taskService.getTasks().then(
                  tasks => {
                    if(null !== tasks){
                      this.tasks=tasks;
                    }
                  }
                )
               }

  task :Task = new Task();

  tasks :Task[] = [];

  type : string;

  date : Date = new Date();

  //a : String = new String();



  ngOnInit() {
  }

  saveTask(){
    if(this.task.title === undefined)
      console.log("walou1");
    else{
        if(this.task.type !== undefined){
          if(this.task.duedate=== undefined){
            console.log("walou2");
          }
          else{
            this.saveTask2();
          }
        }
        else{
          this.task.type="none";
          this.saveTask2();
        }
      }
    }


  saveTask2(){
    console.log(this.task);
    this.task.id=Date.now();
    this.tasks.push(this.task);
    this.taskService.saveTasks(this.tasks);
    // Schedule delayed notification
    var dateN = new Date(this.task.duedate);
    // Schedule delayed notification
    if(this.task.type!=="anniversaire" && this.task.type!=="none")
    this.localNotifications.schedule({
       text: this.task.title,
       trigger: {at: new Date(this.task.duedate)},
       led: 'FF0000',
       sound: null
    });
    this.navCtrl.navigateBack('/home');
  }

  enterSave(keyCode: number){
    if(keyCode === 13)
    this.saveTask();
  }

}
