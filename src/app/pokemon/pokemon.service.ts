import {Injectable} from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    constructor(private http: HttpClient
    ) {
    }

    getPokemonList(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>('api/pokemons').pipe(
            tap((response) => {
                console.log(response)
            }),
            catchError((err) => this.handleEroor(err, []))
        );
    }

    getPokemonById(id: number): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
            tap((res) => {
                this.log(res)
            }), catchError((err) => this.handleEroor(err, undefined))
        )
    }

    getPokemonTypeList() {
        return ['Plante', 'Feu', "Eau", "Insect", "Normal", "Electrik", "Poison", "Fée", 'Vol', 'Combat', "Psy"]
    }

    updatePokemon(pokemon: Pokemon | undefined): Observable<Pokemon> {
        const HttpOption = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.put<Pokemon>('api/pokemons', pokemon, HttpOption).pipe(
            tap((response) => this.log(response)),
            catchError((err) => this.handleEroor(err, undefined))
        )
    }

    deletePokemon(id: number): Observable<any> {
        return this.http.delete(`api/pokemons/${id}`).pipe(
            tap(response => this.log(response)),
            catchError((error) => this.handleEroor(error, null))
        )
    }

    addPokemon(pokemon: Pokemon | undefined): Observable<Pokemon> {
        const HttpOption = {
            headers: new HttpHeaders({'Content-Type': 'application/json'})
        };
        return this.http.post<Pokemon>('api/pokemons', pokemon,HttpOption).pipe(
            tap(response => this.log(pokemon)), catchError(error => this.handleEroor(error, null))
        )
    }
searchpokemon (term:string):Observable<Pokemon[]>{
        if (term.length<=1){
            return of([])
        }
        return this.http.get<Pokemon[]>(`api/pokemons?name=${term}`).pipe(
            tap(response=>this.log(response)),catchError(error=>this.handleEroor(error,undefined))
        )
}
    private log(response: any) {
        console.table(response)
    }

    private handleEroor(error: Error, errorValue: any) {
        console.error(error);
        return of(errorValue)
    }
}
