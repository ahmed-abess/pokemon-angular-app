import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
    selector: 'app-add-pokemon',
    template: `<h2 class="center">Ajouter un pokemon</h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>`,
    styles: []
})
export class AddPokemonComponent implements OnInit {
    pokemon :any;

    constructor() {
    }

    ngOnInit(): void {
        this.pokemon = new Pokemon()
      console.log(this.pokemon)

    }

}
