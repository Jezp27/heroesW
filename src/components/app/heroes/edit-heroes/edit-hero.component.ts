import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as localStore from '../store';
import { Hero } from '../models/hero.model';
import { Store } from '../../../../../node_modules/@ngrx/store';


@Component({
    selector: 'app-edit-hero',
    templateUrl: './edit-hero.component.html',
    styleUrls: ['./edit-hero.component.scss']
})

export class EditHeroComponent implements OnInit  {
     hero : Hero;
    constructor(private location: Location, private route: ActivatedRoute, private store: Store<localStore.HeroState>){}
     
    ngOnInit(){
        this.store.select(localStore.getAllHeroes).subscribe(state =>{
            this.hero= state.find(hero => hero._nickname === this.interceptNickname());
      });
    }

    interceptNickname() {
        return this.route.snapshot.paramMap.get('nickname');
    } 

    goBack(): void {
        this.location.back();
      }

    updateHero(){
       this.store.dispatch(localStore.updateHero(this.hero));
        this.store.select(localStore.updateHero(this.hero)).subscribe();
      console.log(this.hero);
        
    }
}
