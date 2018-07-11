import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero.model';

// Defining Actions Type
export const LOAD_HEROES = '[Heroes] Load Heroes';
export const LOAD_HEROES_SUCCESS = '[Heroes] Load Heroes Succes';
export const LOAD_HEROES_FAIL = '[Heroes] Load Heroes Fail';

export class LoadHeroes implements Action {
  readonly type = LOAD_HEROES;
}

export class LoadHeroesSuccess implements Action {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor(public payload: Hero[]) {}
}

export class LoadHeroesFail implements Action{
  readonly type = LOAD_HEROES_FAIL;
  constructor(public payload: any) {}
}

// Action types
export type Actions = LoadHeroes | LoadHeroesSuccess | LoadHeroesFail;