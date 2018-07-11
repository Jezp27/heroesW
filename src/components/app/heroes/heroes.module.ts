import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeroesComponent } from './heroes.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService} from './hero.service';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { reducers } from './store';

@NgModule({
  declarations: [
    HeroesComponent 
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
  
    //StoreModule.forFeature('Heroes', reducers)
  ],
  exports: [ HeroesComponent ],
  providers: [HeroService],
})
export class HeroesModule { }