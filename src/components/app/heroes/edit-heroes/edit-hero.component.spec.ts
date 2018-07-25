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
    _name: 'Bruce Wayne',
    _height: 5.8,
    _nickname: 'Batman',
    _picture: 'http://batmanimg',
  };

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
    spyOn(component, 'interceptNickname').and.returnValue('Batman');
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

