import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { HeroService } from '../../store/services/hero.service';
import { HeroEffects } from '../effects';
import * as HeroActions from '../actions/hero.actions';

export class TestActions extends Actions {
  constructor() {
    super(empty());
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }
}

export function getActions() {
  return new TestActions();
}

describe('HeroEffects', () => {
  let actions$: TestActions;
  let service: HeroService;
  let effects: HeroEffects;

  const mockHeroes = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HeroService,
        HeroEffects,
        { provide: Actions, useFactory: getActions },
      ],
    });

    actions$ = TestBed.get(Actions);
    service = TestBed.get(HeroService);
    effects = TestBed.get(HeroEffects);

    spyOn(service, 'getAllHeroes').and.returnValue(of(mockHeroes));
  });

  describe('loadHeroes$', () => {
    it('should return a collection from LoadHeroesSuccess', () => {
      const action = new HeroActions.LoadHeroes();
      const actionSuccess = new HeroActions.LoadHeroesSuccess(mockHeroes);

      actions$.stream = hot('-a', { a: action });  //or cold too Cambia el source de la accion
      const expected = cold('-b', { b: actionSuccess });

      expect(effects.loadHeroes$).toBeObservable(expected);
    });
  });
});