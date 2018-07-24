import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let httpClient: HttpClient;
  let heroService: HeroService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService],
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    heroService = TestBed.get(HeroService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('get all heroes', () => {
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
      heroService = TestBed.get(HeroService);
      //spyOn(heroService, 'getAllHeroes').and.returnValue(of(heroes));
    });

    let heroesResponse;
    it('should return the expected heroes', () => {
      heroService.getAllHeroes().subscribe((response) => {
          heroesResponse = response;
          expect(heroesResponse).toEqual(heroes);
      });

      // HeroService should have made just one request to GET heroes from expected URL
      const mockRequest = httpTestingController.expectOne('https://udem.herokuapp.com/heroes');
      // Assert that the request is a GET.
      expect(mockRequest.request.method).toEqual('GET');
      //Respond with the mock heroes:  Observable to resolve
      mockRequest.flush(heroes);
    });
  });
});