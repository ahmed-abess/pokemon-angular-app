import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {POKEMONS} from "./pokemon/mock-pokemon";
import {Pokemon} from "./pokemon/pokemon";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
    constructor() { }
    createDb()  {
        const pokemons:Pokemon[]=POKEMONS
    return {pokemons};
  }

}
