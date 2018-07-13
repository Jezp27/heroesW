import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero.model';
import * as HeroActions from '../actions/hero.actions';

export interface HeroState {
  entities:{[id:number]:Hero};
  loading: boolean;
  loaded: boolean;
};

export const initialState: HeroState = {
  entities:{},
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: HeroActions.Actions): HeroState {

  switch(action.type) {
    case HeroActions.LOAD_HEROES:
      return {...state, loading: true, loaded: false};
    case HeroActions.LOAD_HEROES_SUCCESS:

      const heroes = action.payload;
      const entities = heroes.reduce(
        (entities: { [id:number]: Hero}, hero: Hero) =>{
        return{
          ...entities,
          [hero.id]: hero,
        };
      },
      {
        ...state.entities,
      }
      );
      return {...state, loading: false, loaded: true, entities};
    case HeroActions.LOAD_HEROES_FAIL:
      return {...state, loading: false, loaded: false};
    default:
      return state;
  }
}

// Allows to access interface properties (level states)
// Functions to compose with the selectors
export const getHeroesEntities = (state: HeroState) => state.entities; 
export const getHeroesLoading = (state: HeroState) => state.loading;
export const getHeroesLoaded = (state: HeroState) => state.loaded;

