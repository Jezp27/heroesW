import * as HeroReducer from '../reducers/hero.reducer';
import * as HeroActions from '../actions/hero.actions';

describe('Hero Reducer', () =>{
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

  describe('Action type LOAD_HEROES_SUCCESS ', () =>{
    it('Should update the state with all the heroes on the DB', () => {
      
      const initialState = HeroReducer.initialState;
      const action = new HeroActions.LoadHeroesSuccess(mockHeroes);
      const state = HeroReducer.reducer(initialState, action );

      expect(state.data).toEqual(mockHeroes);
    });
  });

  describe('Action type UPDATE_HERO', () => {
    it('Should update the actual state', () => {
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

      const previousState: HeroReducer.HeroState = {data: mockHeroes};
      const action = new HeroActions.UpdateHero(heroToUpdate);
      const newState = HeroReducer.reducer(previousState, action);

      expect(newState.data).toEqual(heroesUpdated);
    });
  }); 
});