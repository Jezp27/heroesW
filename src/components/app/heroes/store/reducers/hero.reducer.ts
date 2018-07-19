import * as HeroActions from '../actions/hero.actions';

export interface HeroState {
  data: any;
};

export const initialState: HeroState = {
  data: [],
};

export function reducer(state = initialState, action: HeroActions.Actions): HeroState {
  let data;
  console.log('switch');
  switch(action.type) {   
    
    case HeroActions.LOAD_HEROES_SUCCESS:
      data = action.payload;
      console.log("reducerload");
      return {...state, data};
    
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
      data = newState;
      console.log("reducer update");
      return {...state, data};

    default:
    console.log("default");
    console.log(action.type);
      return state;
  }
}

// Allows to access interface properties (level states)
// Functions to compose with the selectors
export const getHeroes = (state: HeroState) => state.data; 
export const updateHero= (state: HeroState) => state.data;
