import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit {

  searchTerm=new Subject<string>()
  // @ts-ignore
  pokemons:Observable<Pokemon[]>;
  constructor(private router:Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons = this.searchTerm.pipe(
        // {...."ab"..."abz"."ab"...."abc"......}
        debounceTime(300),
        // {......"ab"...."ab"...."abc"......}
        distinctUntilChanged(),
        // {......"ab"..........."abc"......}
        switchMap((term) => this.pokemonService.searchpokemon(term))
        // {.....pokemonList(ab)............pokemonList(abc)......}
    );
  }
  search(term:string){
this.searchTerm.next(term)
  }
  goToDetail(pokemon:Pokemon){
    console.log(pokemon)
    const link=['/pokemons',pokemon.id]
  this.router.navigate(link)
  }

}
