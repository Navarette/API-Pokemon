import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TypeComponent } from './type/type.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Pokemon1Component } from './pokemon1/pokemon1.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    PokemonComponent,
    Pokemon1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
