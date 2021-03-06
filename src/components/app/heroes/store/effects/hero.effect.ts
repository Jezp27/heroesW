import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as heroActions from '../actions/hero.actions';
import { switchMap, map } from 'rxjs/operators';
import { HeroService } from '../../store/services/hero.service';

@Injectable()
export class HeroEffects{

  constructor(private actions$: Actions, private heroService: HeroService){}
  
  @Effect()
  loadHeroes$ = this.actions$.ofType(heroActions.LOAD_HEROES)
    .pipe(switchMap(() => {
        return this.heroService.getAllHeroes().pipe(
          map(heroes => new heroActions.LoadHeroesSuccess(heroes)))
    }));
}