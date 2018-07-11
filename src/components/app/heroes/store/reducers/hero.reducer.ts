import { Action } from '@ngrx/store';
import { Hero } from '../../models/hero.model';
import * as HeroeActions from '../actions/hero.actions';

export interface HeroeState {
  data: Hero[];
  loading: boolean;
  loaded: boolean;
};

export const initialState: HeroeState = {
  data: [],
  loading: false,
  loaded: false,
};

export function reducer(state = initialState, action: HeroeActions.Actions): HeroeState {

  switch(action.type) {
    case HeroeActions.LOAD_HEROES:
      return {...state, loading: true, loaded: false};
    case HeroeActions.LOAD_HEROES_SUCCESS:
      return {...state, loading: false, loaded: true};
    default:
      return {...state, loading: false, loaded: false};
  }
}
