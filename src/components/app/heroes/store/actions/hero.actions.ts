import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero.model';

// Defining Actions Type
export const LOAD_HEROES = '[Heroes] Load Heroes';
export const LOAD_HEROES_SUCCESS = '[Heroes] Load Heroes Succes';
export const LOAD_HEROES_FAIL = '[Heroes] Load Heroes Fail';
export const LOAD_HERO='[Heroes] Load Hero';
export const UPDATE_HERO= '[Heroes] Update Hero';

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadHeroesFail implements Action{
  readonly type = LOAD_HEROES_FAIL;
  constructor(public payload: any) {}
}

export class UpdateHero implements Action{
  readonly type = UPDATE_HERO;
  constructor(public payload: any){}
}
/*export class LoadHero implements Action{
  readonly type= LOAD_HERO;
  constructor(public payload: 'Hero.["_nickname"]'){}
}*/


// Action types
export type Actions = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail | UpdateHero;