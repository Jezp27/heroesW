import { Action } from '@ngrx/store';

// Defining Actions Type
export const LOAD_HEROES = '[Heroes] Load Heroes';
export const LOAD_HEROES_SUCCESS = '[Heroes] Load Heroes Succes';
export const UPDATE_HERO= '[Heroes] Update Hero';

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public payload: any) {}
}

export class UpdateHero implements Action{
  readonly type = UPDATE_HERO;
  constructor(public payload: any){}
}

// Action types
export type Actions = LoadHeroes | LoadHeroesSuccess  | UpdateHero;