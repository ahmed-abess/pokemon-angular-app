import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";
import {FormsModule} from "@angular/forms";
import {PokemonFormComponent} from './pokemon-form/pokemon-form.component';
import {EditPokemonComponent} from './edit-pokemon/edit-pokemon.component';
import {AddPokemonComponent} from './add-pokemon/add-pokemon.component';
import {SearchPokemonComponent} from './search-pokemon/search-pokemon.component';
import {AuthGuard} from "../auth.guard";
import {LoaderComponent} from './loader/loader.component';

const pokemonRoutes: Routes = [
    {path: 'pokemons', component: ListPokemonComponent},
    {path: 'pokemons/add', component: AddPokemonComponent},
    {path: 'pokemons/:id', component: DetailPokemonComponent},
    {path: 'pokemons/edit/:id', component: EditPokemonComponent, canActivate: [AuthGuard]}];

@NgModule({
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonFormComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        SearchPokemonComponent,
        LoaderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(pokemonRoutes),
    ],
    exports: [
        BorderCardDirective
    ],
    providers: [
        PokemonService
    ]
})
export class PokemonModule {
}
