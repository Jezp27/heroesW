import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero.model';
import * as HeroActions from '../actions/hero.actions';

export interface HeroState {
  data: Hero[];
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
    case HeroActions.LOAD_HEROES_SUCCESS:
      const data = action.payload;
      return {...state, loading: false, loaded: true, data};
    case HeroActions.LOAD_HEROES_FAIL:
      return {...state, loading: false, loaded: false};
    default:
      return state;
  }
}

// Allows to access interface properties (level states)
// Functions to compose with the selectors
export const getHeroesLoading = (state: HeroState) => state.loading;
export const getHeroesLoaded = (state: HeroState) => state.loaded;
export const getHeroes = (state: HeroState) => state.data; 
