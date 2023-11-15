import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Type, TypeList } from '../models/type.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
  type!: TypeList;
  obs!: Observable<TypeList>;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    this.obs = this.http.get<TypeList>('https://pokeapi.co/api/v2/type')
    this.obs.subscribe(this.faiqualcosa)
  }

  faiqualcosa = (type: TypeList) => {
    this.type = type
    console.log(type)
  }
  getLastPart(arg0:string){
    return arg0.split("/")[6]

  }
}
