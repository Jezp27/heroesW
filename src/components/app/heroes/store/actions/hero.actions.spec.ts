import * as HeroActions from '../actions/hero.actions';


describe('Hero Actions can be created correctly', () => {
  describe('Load Heroes', () => {
    it('should create a new Load Heroes action', () =>{
      const action = new HeroActions.LoadHeroes();
      expect({...action}).toEqual({type: HeroActions.LOAD_HEROES});
    });
  });

  describe('Load Heroes Success', () => {
    it('should create a new Load Hero Success action', () => {
      const Mockheroes = [
        {
          id: 1,
          name: "Anthony Stark",
          height: 6.1,
          picture: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
          nickname: "Iron Man"
        },
        {
          id: 2,
          name: "Peter Parker",
          height: 5.1,
          picture: "http://i.annihil.us/u/prod/marvel/i/mg/9/30/538cd33e15ab7/standard_xlarge.jpg",
          nickname: "Spider-Man"
        },
        ];

      const action = new HeroActions.LoadHeroesSuccess(Mockheroes);
      expect({...action}).toEqual({type: HeroActions.LOAD_HEROES_SUCCESS, payload: Mockheroes});
      });
  });

  describe('Update Hero', () => {
    it('should create a new Update Hero action', () => {
      const HeroToUpdate = 
        {
          id: 1,
          name: "Anthony Stark",
          height: 6.1,
          picture: "http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg",
          nickname: "Iron Man"
        };

      const action = new HeroActions.UpdateHero(HeroToUpdate);
      expect({...action}).toEqual({type: HeroActions.UPDATE_HERO, payload: HeroToUpdate }); 
    })
  });
});