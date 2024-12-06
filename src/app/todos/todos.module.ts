import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { TodoListComponent } from './todo-list/todo-list.component';
import {PokemonModule} from "../pokemon/pokemon.module";

const pokemonRoutes: Routes = [
  {path: 'todos', component: TodoListComponent},
]

@NgModule({
  declarations: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes),
    PokemonModule,
  ]
})
export class TodosModule { }
