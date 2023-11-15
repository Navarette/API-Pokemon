import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Root } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon1',
  templateUrl: './pokemon1.component.html',
  styleUrls: ['./pokemon1.component.css']
})
export class Pokemon1Component {
  //Ossreva i cambi di routing
  obs!: Observable<Root>;
  pokemon1!: Root;
  activatedRoute: any;
  id!: any;

  constructor(
    private route: ActivatedRoute,
    public http: HttpClient
  ) { }

  ngOnInit() {

    this.route.params.subscribe(paramId => {
      this.id = paramId['path']

    })
    this.obs = this.http.get<Root>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
    this.obs.subscribe(this.res)
  }
  res = (pokemon1: Root) => {
    this.pokemon1 = pokemon1
    console.log(pokemon1)
  }
}
