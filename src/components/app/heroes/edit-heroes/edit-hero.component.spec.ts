import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EditHeroComponent } from './edit-hero.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

describe('EditHeroComponent', ()=> {
  let component: EditHeroComponent;
  let fixture: ComponentFixture<EditHeroComponent>;
  const router = {navigate: jasmine.createSpy('navigate')};

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroComponent],
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
    it('Function calls route.navigete() method', ()=>{
      component.goBack();
      expect(router.navigate).toHaveBeenCalled();
    });

    it('Go back function navigate to /heroes' , () => {
      component.goBack();
      expect(router.navigate).toHaveBeenCalledWith(['']);
      //expect(location.pathname).toBe('/heroes');
    });
  })
  
});