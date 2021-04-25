import { TodoService } from './../../Services/todo.service';
import { Todo } from './../../models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(private TodoService:TodoService) { }

 todos:Todo[] = [];

  ngOnInit() {
    this.TodoService.getTodos().subscribe(todos=>{
      this.todos = todos;
    })
  }
  deleteTodo(todo:Todo) {
    // Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    this.TodoService.deleteTodo(todo).subscribe();
  }
  addTodo(todo:Todo)
  {
    this.TodoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }
}
