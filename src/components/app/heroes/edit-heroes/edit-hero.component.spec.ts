import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { EditHeroComponent } from './edit-hero.component';
import { HeroesComponent } from '../heroes.component';
import { routes } from '../heroes.module';
import * as heroStore from '../store';
import { HttpClientModule } from '../../../../../node_modules/@angular/common/http';
import { Store, StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import * as HeroReducer from '../store/reducers/hero.reducer';
import { Observable } from 'rxjs';

describe('EditHeroComponent', () => {
  let location: Location;
  let router: Router;
  let fixture;
  let component: EditHeroComponent;
  let store: Store<heroStore.HeroState>;
  const heroToUpdate =
  {
    id: 1,
    name: 'Bruce Wayne',
    height: 5.8,
    nickname: 'Batman',
    picture: 'http://batmanimg',
  };

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
      imports: [RouterTestingModule.withRoutes(routes),
      StoreModule.forRoot({
        ...heroStore.reducers,
      }),
        RouterTestingModule,
        HttpClientModule,
        FormsModule],
      declarations: [EditHeroComponent, HeroesComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(EditHeroComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    const heroState: HeroReducer.HeroState = { data: heroes };
    spyOn(store, 'select').and.returnValue(Observable.of(heroState.data));
    spyOn(component, 'interceptId').and.returnValue(1);
  });

  it('goBack() function should redirect to the initial page', fakeAsync(() => {
    component.goBack();
    tick();
    expect(location.path()).toBe('/');
  }));

  it('Should dispatch the UpdateHeroes action when a hero is updated', () => {
    const action = new heroStore.UpdateHero(heroToUpdate);
    component.hero = heroToUpdate;
    component.updateHero();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });

  it('Should initialize the Hero object', () => {
    component.ngOnInit();
    expect(component.hero).toEqual(heroes[1]);
  });
});

