import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { Store, StoreModule } from '@ngrx/store';
import * as heroStore from '../heroes/store';
import { HeroEffects } from '../heroes/store';
import { EffectsModule } from '@ngrx/effects';
import { HeroService } from './store/services/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import * as HeroReducer from './store/reducers/hero.reducer';
import { Observable } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let store: Store<heroStore.HeroState>;

  const heroes = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...heroStore.reducers,
        }),
        EffectsModule.forRoot([HeroEffects]),
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [HeroesComponent],
      providers: [
        HeroService,
      ],
    });

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    const heroState: HeroReducer.HeroState = { data: heroes };
    spyOn(store, 'select').and.returnValue(Observable.of(heroState.data));
  });

  describe('Should select getAllHeroes', () => {
    it('Should populate Heroes array with the right data', () => {
      component.ngOnInit();
      expect((component.heroes).length).toEqual(2);
      expect(component.heroes).toEqual(heroes);
    });
  });

  describe('heightConversion function', () => {
    it('Should return the right conversion from meters to feet ', () => {
      const heightInFeet = 6.1;
      const heightInMeters = '1.86';
      expect(component.heightConversion(heightInFeet)).toEqual(heightInMeters);
    });
  });
});