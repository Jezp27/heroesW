import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer, ReducerObservable } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
import {FlexLayoutModule} from '@angular/flex-layout';
import { reducers } from './heroes/store';

export const routes: Routes =[
  { path: '', pathMatch: 'full', redirectTo: 'heroes'},
  { path:'heroes', loadChildren: './heroes/heroes.module#HeroesModule'}
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
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }