import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as heroStore from '../app/heroes/store';
import { Observable } from 'rxjs';
import { sample } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    coordenadaX: number  ;
    coordenadaY: number ;

    constructor(private store: Store<heroStore.HeroState>) { }

    ngOnInit() {
        this.store.dispatch(new heroStore.LoadHeroes());
        Observable.fromEvent(document, 'mousemove').pipe(
            sample(interval(2000)),
        ).subscribe((event: MouseEvent) =>{
            this.coordenadaX = event.clientX;
            this.coordenadaY = event.clientY;
        })
    }
}