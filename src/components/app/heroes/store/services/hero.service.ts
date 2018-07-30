import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../../models/hero.model';
import { map, filter, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { originalHero } from '../../models/originalHero.model';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) { }

  getAllHeroes() {
    const endPoint = 'https://udem.herokuapp.com/heroes';
    let heroes:Hero[];
    let id = 0;
    let newHero;
    return this.http.get<originalHero[]>(endPoint).pipe(
      flatMap((response: originalHero[]) => Observable.from(response)),
      filter((hero: originalHero) => hero._height >= 6),
      map((hero: originalHero) => {
        let newHero: Hero;
        id++;
        return newHero = { id: id, name: hero._name, height: hero._height, picture: hero._picture, nickname: hero._nickname } 
      })
    )
  }
}
