import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { Store, StoreModule } from '@ngrx/store';
import * as heroStore from '../heroes/store';
import { HeroEffects } from '../heroes/store';
import { EffectsModule } from '@ngrx/effects';
import { HeroService } from './store/services/hero.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import * as HeroReducer  from './store/reducers/hero.reducer';
import { Observable } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let store: Store<heroStore.HeroState>;

  const heroes = [
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
      imports: [
        StoreModule.forRoot({
          ...heroStore.reducers,
        }),
        EffectsModule.forRoot([HeroEffects]),
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [HeroesComponent],
      providers:[
        HeroService,
      ],
    });

    fixture= TestBed.createComponent(HeroesComponent);
    component= fixture.componentInstance;
    store= TestBed.get(Store);
    
    const heroState: HeroReducer.HeroState = {data: heroes};
    spyOn(store, 'select').and.returnValue(Observable.of(heroState.data));
  });

  describe('Should select getAllHeroes', () =>{
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