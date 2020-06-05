import { Task } from './../models/task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  findAll(){
    return this.http.get<Task[]>("http://localhost:5000/tasks");
  }
}
