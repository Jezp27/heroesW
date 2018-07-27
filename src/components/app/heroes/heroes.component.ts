import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as heroStore from '../heroes/store';
import { Hero } from '../heroes/models/hero.model';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

const ok: {name: string, id:string}[]= [{name: 'juan', id: '1'}, {name: 'juan2jhgjuyfg', id: '2'}];

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
    heroes: Hero[];
    heroesToSearch: Hero[];
    inputText:String;

    constructor(private store: Store<heroStore.HeroState>) { }
    //@ViewChild('search')search: ElementRef;
    ngOnInit() {
        this.store.select(heroStore.getAllHeroes).subscribe(state => {
            this.heroes = state;
            this.heroesToSearch=state;
        });
        /*
        let inputElm = this.search.nativeElement;
        Observable.fromEvent(inputElm, 'keyup').pipe(
            debounceTime(3000),
            distinctUntilChanged()
        ).subscribe(()=> {
            this.searchHeroes(inputElm.value)});

        Observable.fromEvent(document.body, 'mousemove').subscribe(e => {
            console.log(e.pageX, e.pageY)
        })*/
            
    }

    search = (nickname$: Observable<string>) => nickname$.pipe(
        debounceTime(3000),
        distinctUntilChanged(),
        map(term => term === '' ? []
          : this.heroes.filter(hero => hero.nickname.toLowerCase().indexOf(term.toLowerCase()) > -1))
      );

    heightConversion(height) {
        const conversion = 3.28;
        return (height / conversion).toFixed(2);
    }

    /*searchHeroes(name:string){
        this.heroes= this.heroesToSearch;
        let heroesFounded: Hero[] = [];
        for(var i in this.heroes){
           if(this.heroes[i].nickname.toLowerCase().includes(name.toLowerCase())){
            heroesFounded.push(this.heroes[i]);
           }
        }
        this.heroes = heroesFounded;
    }*/
}

