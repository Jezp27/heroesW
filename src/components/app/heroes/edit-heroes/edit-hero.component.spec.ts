import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EditHeroComponent } from './edit-hero.component';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

describe('EditHeroComponent', ()=> {
  let component: EditHeroComponent;
  let fixture: ComponentFixture<EditHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeroComponent],
     
    });

    fixture = TestBed.createComponent(EditHeroComponent);
    component = fixture.componentInstance;
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

  it('' , () =>{

  });
});