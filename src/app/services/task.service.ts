import { Task } from '../models/Task';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }
APIUrl="http://localhost:5000/tasks";
  findAll(){
    return this.http.get<Task[]>(this.APIUrl);
  }

  delete(id){
    return this.http.delete(`${this.APIUrl}/${id}`)
    //return this.http.delete("http://localhost:5000/tasks/"+id)
    //deusieme methode 9dima !! 
  }
  persist(task){
    return this.http.post<Task>(this.APIUrl,task);
  }

completed_task(id,completed){
  return this.http.patch(`${this.APIUrl}/${id}`,{completed:!completed})
}

updateTAsk(task){
  return this.http.put(`${this.APIUrl}/${task.id}`,task)
}
} 
