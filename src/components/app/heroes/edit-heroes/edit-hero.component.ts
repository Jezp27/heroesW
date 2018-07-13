import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'app-edit-hero',
    templateUrl: './edit-hero.component.html',
    styleUrls: ['./edit-hero.component.scss']
})

export class EditHeroComponent implements OnInit  {
     
    constructor(private location: Location, private route: ActivatedRoute,){}
     
    ngOnInit(){
        this.showHero();
    }

    showHero(): void {
        const name = this.route.snapshot.paramMap.get('nickname');

    } 

    goBack(): void {
        this.location.back();
      }
}
