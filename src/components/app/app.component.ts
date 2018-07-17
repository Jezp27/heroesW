import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as localStore from '../app/heroes/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
    constructor(private store: Store<localStore.HeroState>) { }
    
    ngOnInit() {
        this.store.dispatch(new localStore.LoadHeroes());
    }
}