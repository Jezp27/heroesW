import * as Heroes from './hero.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

export interface HeroState{
  heroes: Heroes.HeroState;
}

// Reducers composition 
export const reducers: ActionReducerMap<HeroState>={
  heroes: Heroes.reducer,
};

// Create base references to the products state (Heroes comes from StoreModule.forFeature attributte heroes)
export const getHeroesState = createFeatureSelector<HeroState>('heroes');

// Heroes State ()
export const getHeroState = createSelector(getHeroesState, (state: HeroState) => state.heroes);

//Selectors for each level state
export const getHeroesEntities= createSelector(getHeroState, Heroes.getHeroesEntities);
export const getAllHeroes= createSelector(
  getHeroesEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
)
export const getHeroesLoading= createSelector(getHeroState, Heroes.getHeroesLoading);
export const getHeroesLoaded= createSelector(getHeroState, Heroes.getHeroesLoaded);