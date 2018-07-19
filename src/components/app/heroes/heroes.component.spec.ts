import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { Store, StoreModule } from '@ngrx/store';
import * as heroStore from '../heroes/store';
import { HeroEffects } from '../heroes/store';
import { EffectsModule } from '@ngrx/effects';
import { HeroService } from './store/services/hero.service';
import { and } from '@angular/router/src/utils/collection';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let store: Store<heroStore.HeroState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...heroStore.reducers,
        }),
        EffectsModule.forRoot([HeroEffects])
      ],
      declarations: [HeroesComponent],
      providers:[
        HeroService,
      ],
    });

    fixture= TestBed.createComponent(HeroesComponent);
    component= fixture.componentInstance;
    store= TestBed.get(Store);
    spyOn(store, 'select').and.callThrough();

  });

  let Heroes=[];

  describe('Should select the getAllHeroes action', () =>{
    it('Should call getAllHeroes action', () =>{

    });

    it('Should populate Heroes array with the right data', () => {
      
    });
  });

});