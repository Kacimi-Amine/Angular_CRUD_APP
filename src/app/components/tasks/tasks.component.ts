import { Task } from './../../models/Task';
import { Task } from '../../models/Task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks:Task[]=[];
 resultTasks:Task[]=[];
 mytask:Task={ 
    "title": "",
    "completed": false,
    "author": "Suissi"
  
 }
 editvar=false;
 showadd=false;
 searchtexto="";
  constructor(private tasksserv:TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
getTasks(){
  this.tasksserv.findAll()
    .subscribe(tasks=>{
      this.tasks=this.resultTasks=tasks

    }
      )
}
deleteTask(id){
  this.tasksserv.delete(id)
  .subscribe(()=>{
    this.tasks= this.tasks.filter(task=> task.id!=id)
  })
}

persistTAsk(){
  this.tasksserv.persist(this.mytask)
  .subscribe((task)=> {
    this.tasks=[ ...this.tasks,task] 
    //tu liste encore ce qui exite avec la nouvel task
    this.resetform();
    this.showadd=false;
  })
}


resetform(){
  this.mytask={
    "title": "",
    "completed": false,
    "author": "Suissi"
  }
}
to_completed(task){
  this.tasksserv.completed_task(task.id, task.completed)
  .subscribe(()=> {
    task.completed=!task.completed
  })
}

editTask(task){
  this.mytask=task
  this.editvar=true;
  this.showadd=true;

}
update(){
  this.tasksserv.updateTAsk(this.mytask)
  .subscribe(task => {
      this.resetform();
      this.editvar=false;
    }
  )
}
searchTasks(){
  this.resultTasks=this.tasks.filter((task)=> task.title.toLocaleLowerCase().includes(this.searchtexto.toLocaleLowerCase())
  
  )
}

}
