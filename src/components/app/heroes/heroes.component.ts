import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as localStore from '../heroes/store';
import { Hero } from '../heroes/models/hero.model';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];

    constructor(private store: Store<localStore.HeroState>) { }

    ngOnInit() {
        this.store.select(localStore.getAllHeroes).subscribe(state => {
            this.heroes = state;
        });
        //this.store.dispatch(new localStore.LoadHeroes());
    }

    estaturaEnMetros(estaturaEnPies) {
        const conversion = 3.28;
        return (estaturaEnPies / conversion).toFixed(2);
    }
}

