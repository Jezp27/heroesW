import * as Heroes from './hero.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface HeroState{
  heroes: Heroes.HeroState;
}

// Reducers composition 
export const reducers: ActionReducerMap<HeroState>={
  heroes: Heroes.reducer,
};

// Create base references to the heroes state (Heroes comes from StoreModule.forFeature attributte heroes)
export const getHeroesState = createFeatureSelector<HeroState>('heroes');

// Heroes State ()
export const getHeroState = createSelector(getHeroesState, (state: HeroState) => state.heroes);

//Selectors for each level state
export const getAllHeroes= createSelector(getHeroState, Heroes.getHeroes);
export const getHeroesLoading= createSelector(getHeroState, Heroes.getHeroesLoading);
export const getHeroesLoaded= createSelector(getHeroState, Heroes.getHeroesLoaded);
export const updateHero= createSelector(getHeroState, Heroes.updateHero);
//export const getHero= createSelector(getHeroState, Heroes.getHero);