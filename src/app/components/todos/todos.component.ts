import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'; // import Todo class/interface/model

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // initialize property
  todos: Todo[] = [];
  inputTodo: any = '';

  // dont know why to use this
  constructor() {}

  // initialize method for load initial Todo list
  ngOnInit(): void {
    this.todos = [
      {
        content: 'Learn Angular',
        completed: true,
      },
      {
        content: 'Learn React',
        completed: false,
      },
      {
        content: 'Do thing 1',
        completed: false,
      },
    ];
  }

  // for all of these method : we goanna use patch mehtod when we do backend work
  toggleTodo(todo: Todo) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter((t) => t !== todo);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
