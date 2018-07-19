import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import * as heroStore from '../app/heroes/store';
import { HeroService } from './heroes/store/services/hero.service';
import { HeroEffects } from '../app/heroes/store/effects/hero.effect';
import { EffectsModule } from '@ngrx/effects';

describe('appComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let store: Store<heroStore.HeroState>;


  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...heroStore.reducers,
        }),
        EffectsModule.forRoot([HeroEffects])
      ],
      declarations: [AppComponent],
      providers:[
        HeroService,
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  
  it('Should dispatch the LoadHeroes action when created', () => {
    const action = new heroStore.LoadHeroes();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});