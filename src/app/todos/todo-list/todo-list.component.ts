import {Component, OnInit} from '@angular/core';
import {TodoServiceService} from "../todo-service.service";
import {Todos} from "../Todos";
import {Todo} from "../Todo";

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styles: []
})
export class TodoListComponent implements OnInit {

    Todos: Todo[] | undefined;

    constructor(private tosoService: TodoServiceService) {
    }

    ngOnInit(): void {
        this.tosoService.getPokemonList().subscribe(data => {
          this.Todos=data
          console.log(this.Todos)
        })

    }

}
