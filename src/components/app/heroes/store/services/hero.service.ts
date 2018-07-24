import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../../models/hero.model';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService{
  constructor(private http: HttpClient){}

  getAllHeroes(){
    const endPoint = 'https://udem.herokuapp.com/heroes';
    return this.http.get<Hero[]>(endPoint).pipe(
      catchError((error: any) => Observable.throw(error.json()))
    );
  }
}
