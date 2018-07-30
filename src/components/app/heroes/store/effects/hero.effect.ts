import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as heroActions from '../actions/hero.actions';
import { switchMap, map, catchError, flatMap, filter } from 'rxjs/operators';
import { HeroService } from '../../store/services/hero.service';
import { Hero1 } from '../../models/originalHero.model';
import { Hero } from '../../models/hero.model';
import { Observable } from 'rxjs';

@Injectable()
export class HeroEffects{
  heroes:Hero[];
  id = 0;
  constructor(private actions$: Actions, private heroService: HeroService){}

  
  @Effect()
  loadHeroes$ = this.actions$.ofType(heroActions.LOAD_HEROES)
    .pipe(switchMap(() => {
        return this.heroService.getAllHeroes().pipe(
          map(heroes => new heroActions.LoadHeroesSuccess(heroes)))
      }));
}