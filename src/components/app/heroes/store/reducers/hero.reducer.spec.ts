import * as HeroReducer from '../reducers/hero.reducer';
import * as HeroActions from '../actions/hero.actions';

describe('Hero Reducer', () =>{
  const mockHeroes = 
        [
          {
            id: 0,
            name: 'Anthony Stark',
            height: 6,
            nickname: 'Iron Man',
            picture: 'http://',
          },
          {
            id: 1,
            name: 'Bruce Wayne',
            height: 4,
            nickname: 'Batman',
            picture: 'http://',
          },
        ];
    
  const mockHero =
        [
          {
            id: 1,
            name: 'Bruce Wayne',
            height: 4,
            nickname: 'Batman',
            picture: 'http://',
          },  
        ];


  describe('Action type LOAD_HEROES_SUCCESS ', () =>{
    it('Should update the state with all the heroes on the DB', () => {
      
      const initialState = HeroReducer.initialState;
      const action = new HeroActions.LoadHeroesSuccess(mockHeroes[1]);
      const state = HeroReducer.reducer(initialState, action );

      expect(state.data).toEqual(mockHero);
    });
  });

  describe('Action type UPDATE_HERO', () => {
    it('Should update the actual state', () => {
      const heroToUpdate = 
        {
          id: 1,
          name: 'Bruce Wayne',
          height: 5.8,
          nickname: 'Batman',
          picture: 'http://batmanimg',
        };

      const heroesUpdated = 
        [
          {
            id: 0,
            name: 'Anthony Stark',
            height: 6,
            nickname: 'Iron Man',
            picture: 'http://',
          },
          {
            id: 1,
            name: 'Bruce Wayne',
            height: 5.8,
            nickname: 'Batman',
            picture: 'http://batmanimg',
          },
        ];

      const previousState: HeroReducer.HeroState = {data: mockHeroes};
      const action = new HeroActions.UpdateHero(heroToUpdate);
      const newState = HeroReducer.reducer(previousState, action);

      expect(newState.data).toEqual(heroesUpdated);
    });
  }); 
});