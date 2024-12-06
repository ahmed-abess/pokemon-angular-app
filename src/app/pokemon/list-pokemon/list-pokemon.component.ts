import { Component, OnInit } from '@angular/core';
import {Pokemon} from ".././pokemon";
import {POKEMONS} from ".././mock-pokemon";
import {Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit {
  pokemons: Pokemon[]|undefined ;

constructor(private router:Router,private pokemonService:PokemonService) {
}
  goToPokemon(id:number){
  this.router.navigate(['/pokemons',id])
  }
  ngOnInit() {
  this.pokemonService.getPokemonList().subscribe(data=> this.pokemons=data)
  }
}
