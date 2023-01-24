import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: "This is title 1",
        desc: "This is description",
        active: true
      },
      {
        sno: 2,
        title: "This is title 2",
        desc: "This is description",
        active: true
      },
      {
        sno: 3,
        title: "This is title 3",
        desc: "This is description",
        active: true
      },{
        sno: 4,
        title: "This is title 4",
        desc: "This is description",
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

}
