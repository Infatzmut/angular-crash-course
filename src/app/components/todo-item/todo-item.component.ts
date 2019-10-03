import { Component, OnInit, Input,EventEmitter ,Output } from '@angular/core';
import {Todo } from '../../models/Todos'
import {TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo
  @Output() deleteTodo :EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  onToggle(todo){
    //Toggle in UI
    todo.completed =!todo.completed
    //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo=>
      console.log("")
    )
  }
  onDelete(todo){
    this.deleteTodo.emit(todo)
  }

}
