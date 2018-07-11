import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../heroes/models/hero.model';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService{
  constructor(private http: HttpClient){}

  getAllHeroes(){
    const endPoint = 'https://udem.herokuapp.com/heroes';
    return this.http.get<Hero[]>(endPoint).pipe(
      catchError(this.handleError('getAllHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }


}
