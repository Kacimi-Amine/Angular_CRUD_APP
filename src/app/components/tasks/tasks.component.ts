import { Task } from './../../models/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 tasks:Task[]=[];
  constructor(private tasksserv:TaskService) { }

  ngOnInit(): void {
    this.getTasks();
  }
getTasks(){
  this.tasksserv.findAll()
    .subscribe(tasks=>this.tasks=tasks)
}
}
