import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of, tap} from "rxjs";
import {Todos} from "./Todos";
import {Todo} from "./Todo";

@Injectable({
    providedIn: 'root'
})
export class TodoServiceService {

    constructor(private http: HttpClient
    ) {
    }

    getPokemonList(): Observable<Todo[]> {
        return this.http.get<any>('https://dummyjson.com/todos').pipe(
            map((response) => {
               return response.todos
            }),
            catchError((err) => {
                console.log(err)
                return of([])
            })
        );
    }
}
