import { ManageService } from './../todo-service/manage.service';
import { Todo } from './../todo-interface/todo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  tasks: Todo[];

  constructor(private manageService: ManageService) {}

  ngOnInit(): void {
    this.manageService.getTasks().subscribe((task) => {
      this.tasks = task;
    });
  }
}
