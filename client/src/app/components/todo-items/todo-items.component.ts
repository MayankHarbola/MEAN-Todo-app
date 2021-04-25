import { Todo } from './../../models/todo.model';
import { TodoService } from './../../Services/todo.service';
import { Component,EventEmitter ,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent  {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }


  setClass()
  {
    // console.log(this.todo.completed);
    let obj = {
      todo:true,
      "iscomplete":this.todo.completed
    }
    return obj;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
    this.todoService.toogleCompleted(todo).subscribe(todo => console.log(todo));
  }
  onDelete(todo)
  {
    console.log("deleted");
    this.deleteTodo.emit(todo);
  }

}
