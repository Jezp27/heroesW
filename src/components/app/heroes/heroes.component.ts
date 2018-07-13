import { Component, OnInit } from '@angular/core';
import { HeroService } from './store/services/hero.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as localStore from '../heroes/store';
import { Hero } from '../heroes/models/hero.model';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit  { 
    heroes: Hero[];
     
    constructor(private store: Store<localStore.HeroState>){}

    ngOnInit(){
        this.store.select(localStore.getAllHeroes).subscribe(state =>{
            this.heroes=state;
            //console.log(state);
      });
      this.store.dispatch(new localStore.LoadHeroes());
    }
}

