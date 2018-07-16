import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero.model';
import * as HeroActions from '../actions/hero.actions';

export interface HeroState {
  data: any;
  loading: boolean;
  loaded: boolean;
};

export const initialState: HeroState = {
  data: [],
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: HeroActions.Actions): HeroState {

  switch(action.type) {
    case HeroActions.LOAD_HEROES:
      return {...state, loading: true, loaded: false};
    case HeroActions.UPDATE_HERO:
    case HeroActions.LOAD_HEROES_SUCCESS:
      const data = action.payload;
      return {...state, loading: false, loaded: true, data};
    case HeroActions.LOAD_HEROES_FAIL:
      return {...state, loading: false, loaded: false};
    /*case HeroActions.LOAD_HERO:
      const nickname= action.payload;
      return {...state.data.find(hero => hero._nickname === nickname), loading: true};*/
    default:
      return state;
  }
}

// Allows to access interface properties (level states)
// Functions to compose with the selectors
export const getHeroesLoading = (state: HeroState) => state.loading;
export const getHeroesLoaded = (state: HeroState) => state.loaded;
export const getHeroes = (state: HeroState) => state.data; 
export const getHero= (state: HeroState) => state.data;
export const updateHero= (state: HeroState) => state.data;
