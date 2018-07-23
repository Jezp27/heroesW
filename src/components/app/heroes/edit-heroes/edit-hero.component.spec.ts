import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EditHeroComponent } from './edit-hero.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '../../../../../node_modules/@ngrx/store';
import { HeroesComponent } from '../heroes.component';
import { Component } from '@angular/core';

describe('EditHeroComponent', ()=> {
  const routerSpy= jasmine.createSpyObj('Router', ['navigate']);
  let component: EditHeroComponent;
  let fixture: ComponentFixture<EditHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroComponent],
      imports: [FormsModule, RouterTestingModule, StoreModule],
      providers: [
        { provide: ActivatedRoute }, 
        { provide: Router, useValue: routerSpy },
      ],
    });
    fixture = TestBed.createComponent(EditHeroComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
  });

    describe('GoBack function', () => {
      it('should tell router to navigate when Regresar is clicked', ()=>{
        component.goBack();
        const spy = routerSpy.navigate as jasmine.Spy;
        const args = spy.calls.first().args[0];

        expect(args).toBe(['']);
      });
    });  







  /*
  let component: EditHeroComponent;
  let fixture: ComponentFixture<EditHeroComponent>;
  const router = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroComponent],
      imports: [FormsModule, 
        RouterTestingModule.withRoutes([{ path: ':nickname', component: EditHeroComponent },])],
      providers: [
        { provide: Router, useValue: router },
      ],
    });

    fixture = TestBed.createComponent(EditHeroComponent);
    component = fixture.componentInstance;
    location = TestBed.get(Location);
    spyOn(component, 'goBack');
    spyOn(router, 'navigate');
  });

  class MockActivatedRoute extends ActivatedRoute {
    constructor() {
        super();
        this.params = Observable.of({nickname: "Thor"});
    }
  }

  it('interceptNickname returns the actual nickname on the route', () => {
    const route= new MockActivatedRoute();
    this.ActivatedRoute = route;
    expect(component.interceptNickname()).toEqual("Thor");
  });

  describe('GoBack function', () => {
    it('Function calls route.navigate() method', ()=>{
      component.goBack();
      expect(router.navigate).toHaveBeenCalled();
    });

    it('Go back function navigate to /heroes' , () => {
      component.goBack();
      expect(router.navigate).toHaveBeenCalledWith(['']);
      //expect(location.pathname).toBe('/heroes');
    });
  })*/
  
});