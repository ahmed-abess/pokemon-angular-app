import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-pokemon-form',
    templateUrl: './pokemon-form.component.html',
    styleUrls: ['pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

    // @ts-ignore
    @Input() pokemon: Pokemon | undefined;
    types: string[] | undefined;
    addForm:boolean|undefined;

    constructor(private route: ActivatedRoute, private pokemonService: PokemonService, private router: Router) {
    }

    ngOnInit(): void {
        this.types = this.pokemonService.getPokemonTypeList();
        this.addForm=this.addForm=this.router.url.includes('add')
    }

    hasType(type: string): any {
        if (this.pokemon) {
            return this.pokemon.types.includes(type);
        }
    }

    selectType($event: Event, type: string) {
        const isChecked: boolean = ($event.target as HTMLInputElement).checked
        if (this.pokemon) {
            if (isChecked) {
                this.pokemon?.types.push(type)
            } else {
                const index = this.pokemon?.types?.indexOf(type)
                this.pokemon?.types.splice(index, 1)
            }
        }
    }

    onSubmit() {
        if(this.addForm){
            this.pokemonService.addPokemon(this.pokemon).subscribe((data) => this.router.navigate(["/pokemons/", data.id]),
                (error) => console.error(error)
            )
        }else{
        this.pokemonService.updatePokemon(this.pokemon).subscribe(() => this.router.navigate(["/pokemons/", this.pokemon?.id]),
            (error) => console.error(error)
        )
        }

    }

    isTypesValid(type: string): any {
        if (this.pokemon) {
            if (this.pokemon.types.length == 1 && this.hasType(type)) {
                return false;
            }

            if (this.pokemon.types.length > 2 && !this.hasType(type)) {
                return false;
            }

            return true;
        }
    }

}
