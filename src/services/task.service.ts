import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

public tasks: Promise<Task[]>;

  constructor(private storage : Storage) {
    console.log("hello taskprovider");
    this.tasks= this.storage.get('tasks');
   }

//permet de sauvegarder des taches

   saveTasks(tasks: Task[]){
     this.storage.set('tasks',tasks);
     console.log('save');
   }

//recuperer les taches

   getTasks() : Promise<Task[]>{
     console.log('get');
     return this.storage.get('tasks');
   }

// suprrimer une taches
/*
  removeTask(id : Task) : Promise<Task[]>{
    console.log('supp');

    this.storage.remove(id);
    return this.storage.get('tasks');
  }
*/
}
