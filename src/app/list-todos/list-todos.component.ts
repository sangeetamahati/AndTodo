import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
//Future
// - No Navigation Menu and Footer
// - Formatting - Bootstrap
// - No Security for Menus
// - Hardcoded Logic in the TodoList and Login Components

// - Remaining Functionality - Edit, Delete, Add
// - Spring Boot
// - Spring Security

export class Todo {
  constructor(
    public id: number,
    public description: String,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos: Todo[]
  message: String
  //new Todo(1, 'Learn to Dance', false, new Date()),
  //new Todo(2, 'Become an Expert at Angular', false, new Date()),
  // new Todo(3, 'Visit India', false, new Date())
  // {id : 1, description : },
  // {id : 2, description : ''},
  // {id : 3, description : 'Visit India'}
  // todo = {
  //     id : 1,
  //     description: 'Learn to Dance'
  // }

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retriveAllTodos('mahati').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id) {
    console.log(`delete todo${id}`)
    this.todoService.deleteTodo('mahati', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of todo ${id} is successfull`;
        this.refreshTodos();
      }
    )
  }
  updateTodo(id) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos', id])
  }
  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
