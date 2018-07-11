import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit  { 

    constructor(private HeroService: HeroService){}

    ngOnInit(){
      this.HeroService.getAllHeroes();
      
    }
}