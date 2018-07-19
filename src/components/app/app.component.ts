import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as heroStore from '../app/heroes/store';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 
    constructor(private store: Store<heroStore.HeroState>) { }
    
    ngOnInit() {
        //this.store.dispatch(new heroStore.LoadHeroes());
        console.log(this.store.dispatch(new heroStore.LoadHeroes()));
    }
}