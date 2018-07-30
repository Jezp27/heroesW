import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import * as heroStore from '../store';
import * as HeroActions from '../store/actions/hero.actions';
import { Hero } from '../models/hero.model';
import { Store } from '../../../../../node_modules/@ngrx/store';
import { Router } from "@angular/router";


@Component({
    selector: 'app-edit-hero',
    templateUrl: './edit-hero.component.html',
    styleUrls: ['./edit-hero.component.scss']
})

export class EditHeroComponent implements OnInit {
    hero: Hero;
    constructor(private location: Location, private route: ActivatedRoute, private store: Store<heroStore.HeroState>, private router: Router) { }

    ngOnInit() {
        this.store.select(heroStore.getAllHeroes).subscribe(state => {
            this.hero = state.find(hero => hero.id == this.interceptId());
        });
    }

    interceptId() {
        return this.route.snapshot.paramMap.get('id');
    }

    goBack(): void {
        this.router.navigate(['']);
    }

    updateHero() {
        this.store.dispatch(new HeroActions.UpdateHero(this.hero));
    }
}