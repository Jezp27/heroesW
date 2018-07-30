import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../../models/hero.model';
import { catchError, map, filter, flatMap, concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero1 } from '../../models/originalHero.model';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) { }

  getAllHeroes() {
    const endPoint = 'https://udem.herokuapp.com/heroes';
    let heroes:Hero[];
    let id = 0;
    let newHero;
    return this.http.get<Hero1[]>(endPoint).pipe(
      flatMap((response: Hero1[]) => Observable.from(response)),
      filter((hero: Hero1) => hero._height >= 6),
      map((hero: Hero1) => {
        let newHero: Hero;
        id++;
        return newHero = { id: id, name: hero._name, height: hero._height, picture: hero._picture, nickname: hero._nickname } 
      })
    )
  }
}
