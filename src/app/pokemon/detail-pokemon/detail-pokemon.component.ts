import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {POKEMONS} from "../mock-pokemon";
import {PokemonService} from "../pokemon.service";

@Component({
    selector: 'app-detail-pokemon',
    templateUrl: './detail-pokemon.component.html',
    styles: []
})
export class DetailPokemonComponent implements OnInit {
    pokemonList: Pokemon[] | undefined;
    pokemon: Pokemon | undefined;

    constructor(private route: ActivatedRoute, private router: Router,private pokemonService:PokemonService) {
    }

    ngOnInit(): void {
        this.pokemonService.getPokemonList().subscribe(data=> this.pokemonList=data)
        const pokemonId: string | null = this.route.snapshot.paramMap.get('id')
        if (pokemonId) {
            this.pokemonService.getPokemonById(+pokemonId).subscribe(data=>this.pokemon=data);
        } else {
            this.pokemon = undefined
        }
    }

    goToPokemonList() {
        this.router.navigate(['/pokemons']);
    }
    goToEdit(id:number) {
        this.router.navigate(['/pokemons/edit/',+id])
    }
    deletePokemon(pokemon:Pokemon){
        this.pokemonService.deletePokemon(+pokemon.id).subscribe(
            ()=>this.goToPokemonList()
        )
    }
}
