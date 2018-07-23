import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as heroStore from '../heroes/store';
import { Hero } from '../heroes/models/hero.model';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(private store: Store<heroStore.HeroState>) { }

    ngOnInit() {
        this.store.select(heroStore.getAllHeroes).subscribe(state => {
            this.heroes = state;
        });
    }

    heightConversion(height) {
        const conversion = 3.28;
        return (height / conversion).toFixed(2);
    }
}

