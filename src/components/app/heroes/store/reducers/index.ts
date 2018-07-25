import * as HeroesReducer from './hero.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface HeroState{
  heroes: HeroesReducer.HeroState;
}

// Reducers composition 
export const reducers: ActionReducerMap<HeroState>={
  heroes: HeroesReducer.reducer,
};

// Create base references to the heroes state (Heroes comes from StoreModule.forFeature attributte heroes)
export const getHeroesState = createFeatureSelector<HeroState>('heroes');

// Heroes State ()
export const getHeroState = createSelector(getHeroesState, (state: HeroState) => state.heroes);

//Selectors for each level state
export const getAllHeroes= createSelector(getHeroState, HeroesReducer.getHeroes);

//Selector by Nickname
//export const getHero= (nickname) => createSelector(getAllHeroes, hero => state.find(hero => hero._nickname === this.interceptNickname()));