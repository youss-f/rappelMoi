import {Elements} from './elements';


export class Task{
  id: number;
  title: string;
  status: boolean = false ;
  type: string;
  duedate?: any;
  description: string;
  notification: boolean = true;
  //lieu:string;
  //liste: Elements[] = [];
  img:any;
}
