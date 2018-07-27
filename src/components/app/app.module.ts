import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { reducers } from './heroes/store';
import { HeroEffects } from '../app/heroes/store/effects/hero.effect';
import { HeroService } from './heroes/store/services/hero.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'heroes' },
  { path: 'heroes', loadChildren: './heroes/heroes.module#HeroesModule' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([HeroEffects]),
    NgbModule.forRoot()
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }