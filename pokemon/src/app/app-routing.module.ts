import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type/type.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Pokemon1Component } from './pokemon1/pokemon1.component';

const routes: Routes = [
  { path: 'type', component: TypeComponent },
  { path: 'pokemon/:path', component: PokemonComponent },
  { path: 'pokemon1/:path', component: Pokemon1Component },

  { path: '', redirectTo: 'type', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
