import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as localStore from '../store';
import * as HeroActions from '../store/actions/hero.actions';
import { Hero } from '../models/hero.model';
import { Store } from '../../../../../node_modules/@ngrx/store';
import {Router} from "@angular/router";


@Component({
    selector: 'app-edit-hero',
    templateUrl: './edit-hero.component.html',
    styleUrls: ['./edit-hero.component.scss']
})

export class EditHeroComponent implements OnInit  {
     hero : Hero;
    constructor(private location: Location, private route: ActivatedRoute, private store: Store<localStore.HeroState>, private router: Router){}
     
    ngOnInit(){
        this.store.select(localStore.getAllHeroes).subscribe(state =>{
            this.hero= state.find(hero => hero._nickname === this.interceptNickname());
      });
    }

    interceptNickname() {
        return this.route.snapshot.paramMap.get('nickname');
    } 

    goBack(): void {
        this.router.navigate(['']);
      }

    updateHero(){
        this.store.dispatch(new HeroActions.UpdateHero(this.hero));
    }
}