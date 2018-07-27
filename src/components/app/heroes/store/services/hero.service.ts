import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from '../../models/hero.model';
import { catchError, map, filter, flatMap, concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero1 } from '../../models/originalHero.model';

@Injectable()
export class HeroService {
  constructor(private http: HttpClient) { }

  getAllHeroes() {
    const endPoint = 'https://udem.herokuapp.com/heroes';
    let heroes:Hero[];
    let id = 0;
    let newHero;
    return this.http.get<Hero1[]>(endPoint).pipe(
      map(response =>{
      return response.map(hero=> newHero= {id: 9, name: hero._name, height: hero._height, picture: hero._picture, nickname: hero._nickname}  )
    }))
    
     /* flatMap((response: Hero1[]) => Observable.from(response)),
      filter((hero: Hero1) => hero._height >= 6),
      map((hero: Hero1) => {
        let newHero: Hero;
        id++;
        newHero = { id: id, name: hero._name, height: hero._height, picture: hero._picture, nickname: hero._nickname } 
      })
    ).subscribe((newHero: Hero) => heroes.push(newHero));
    console.log(heroes.length);*/
  
}
}

      /*map(hero=> heroy= {id: 9, name: hero._name, height: hero._height, picture: hero._picture, nickname: hero._nickname} )*/

      /*return response.map(hero=> heroy= {id: 9, name: hero._name, height: hero._height, picture: hero._picture, nickname: hero._nickname}  )
      console.log(response);
      console.log(response.map(hero=> heroy= {id: 9, name: hero._name, height: hero._height, picture: hero._picture, nickname: hero._nickname}  ))*/


      //console.log(response);
      //console.log(filter((hero:Hero1) => hero._height >=6))

      //return response.filter(hero => hero._height>=6)

      //filter(hero => hero._height >=6),





      //response.filter(hero => hero.height>=6)),



      /*map(response =>{
      const example= response.pipe()
      response.filter(x => x._height >= 6);*/

      /*map((response) =>{
      
      
      for(let i in response ){
        let hero= {id: i, name: response[i]._name, height: response[i]._height, picture: response[i]._picture, nickname: response[i]._nickname};
        heroes.push(hero);
      }
      return heroes;
    })*/