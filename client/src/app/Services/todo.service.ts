import { Todo } from './../models/todo.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosUrl =  'httplocalhost:3000';
  constructor(private http:HttpClient) { }
  getTodos():Observable<Todo[]>
  {

    return this.http.get<Todo[]>('http://localhost:3000/getDetail')
    // return [
    //   {
    //     id:1,
    //     title:"interview at 5PM",
    //     completed: false
    //   },
    //   {
    //     id:2,
    //     title:"interview at 5:101PM",
    //     completed: false
  // }
    // ]
  }
  toogleCompleted(todo):Observable<any>
  {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put('http://localhost:3000/taskDone',todo,httpOptions);
  }
  deleteTodo(todo):Observable<any>
  {

    return this.http.delete('http://localhost:3000/delete',httpOptions);
  }
  addTodo(todo:Todo):Observable<Todo> {
    // const url = `${this.todosUrl}/save`
    return this.http.post<Todo>('http://localhost:3000/save', todo, httpOptions);
  }
}
