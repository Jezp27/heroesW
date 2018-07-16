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
  let data;
  switch(action.type) {
    
    
    case HeroActions.LOAD_HEROES_SUCCESS:
      data = action.payload;
      return {...state, loading: false, loaded: true, data};
  
    case HeroActions.UPDATE_HERO:
      const heroUpdated = action.payload;
      let newState: any[] =[];
      for (var hero of state.data){
        if (hero._nickname == heroUpdated._nickname){
          newState.push(hero); 
        }else{
          newState.push(hero);
        }
      }
      data= newState;
      return {...state,data};
    default:
      return state;
  }
}

// Allows to access interface properties (level states)
// Functions to compose with the selectors
export const getHeroesLoading = (state: HeroState) => state.loading;
export const getHeroesLoaded = (state: HeroState) => state.loaded;
export const getHeroes = (state: HeroState) => state.data; 
export const updateHero= (state: HeroState) => state.data;
