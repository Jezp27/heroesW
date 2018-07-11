import * as Heroes from './hero.reducer';
import {ActionReducerMap} from '@ngrx/store';

export interface HeroeState{
  heroes: Heroes.HeroeState;
}

// Reducers composition 
export const reducers: ActionReducerMap<HeroeState>={
  heroes: Heroes.reducer,
};