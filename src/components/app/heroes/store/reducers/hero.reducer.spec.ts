import * as HeroReducer from '../reducers/hero.reducer';
import * as HeroActions from '../actions/hero.actions';
import { HeroState } from '.';

describe('Hero Reducer', () =>{

  describe('Action type LOAD_HEROES_SUCCESS ', () =>{
    it('Should update the state with all the heroes on the DB', () => {
      const mockHeroes = 
        [
          {
            _name: 'Anthony Stark',
            _height: 6,
            _nickname: 'Iron Man',
            _picture: 'http://',
          },
          {
            _name: 'Bruce Wayne',
            _height: 4,
            _nickname: 'Batman',
            _picture: 'http://',
          },
        ];
      const  initialState = HeroReducer.initialState;
      const action = new HeroActions.LoadHeroesSuccess(mockHeroes);
      const state = HeroReducer.reducer(initialState, action );

      expect(state.data).toEqual(mockHeroes);
    });
  });

  describe('Action type UPDATE_HERO', () => {
    it('Should update the actual state', () => {
      const mockHeroes = 
        [
          {
            _name: 'Anthony Stark',
            _height: 6,
            _nickname: 'Iron Man',
            _picture: 'http://',
          },
          {
            _name: 'Bruce Wayne',
            _height: 4,
            _nickname: 'Batman',
            _picture: 'http://',
          },
        ];
      const heroToUpdate = 
        {
          _name: 'Bruce Wayne',
          _height: 5.8,
          _nickname: 'Batman',
          _picture: 'http://batmanimg',
        };

      const heroesUpdated = 
        [
          {
            _name: 'Anthony Stark',
            _height: 6,
            _nickname: 'Iron Man',
            _picture: 'http://',
          },
          {
            _name: 'Bruce Wayne',
            _height: 5.8,
            _nickname: 'Batman',
            _picture: 'http://batmanimg',
          }
        ];

      

      const initialState = HeroReducer.initialState;
      const previousState= {...initialState, mockHeroes};
      const action = new HeroActions.UpdateHero(heroToUpdate);
      const newState = HeroReducer.reducer(previousState, action);

      expect(newState.data).toEqual(heroesUpdated);

      //let state: HeroReducer.HeroState;
      //state= {...initialState, mockHeroes};


      //const actionLoad = new HeroActions.LoadHeroesSuccess(mockHeroes);
     //state = HeroReducer.reducer(initialState, actionLoad );

      //const action = new HeroActions.UpdateHero(heroToUpdate);
      //const newState = HeroReducer.reducer(state, action);  

      //expect((newState.data).length).toEqual(2);
      expect(newState.data).toEqual(heroesUpdated);
    
    });
  });
});