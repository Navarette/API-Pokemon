import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Listpokemon, Pokemon } from '../models/pokemonType.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Sprites } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //Ossreva i cambi di routing
  obs!: Observable<Listpokemon>;
  pokemon!: Listpokemon;
  activatedRoute: any;
  id!: any;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {

    this.route.params.subscribe(paramId => {
      this.id = paramId['path']

      this.obs = this.http.get<Listpokemon>(`https://pokeapi.co/api/v2/type/${this.id}`)
      this.obs.subscribe(this.res)
    })

  }
  res = (pokemon: Listpokemon) => {
    this.pokemon = pokemon
  }

  getLastPart(arg0: string) {
    const list = arg0.split("/")
    list.pop()
    return list.pop()

  }

}
