import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';
import {FlexLayoutModule} from '@angular/flex-layout';


// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};


export const routes: Routes =[
  { path: '', redirectTo: '/heroes', pathMatch: 'full'},
  { path:'heroes', loadChildren: './heroes/heroes.module#HeroesModule?sync=true'},
];

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]: [];

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
    StoreModule.forRoot({}, {metaReducers}),
    EffectsModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }