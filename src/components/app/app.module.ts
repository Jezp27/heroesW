import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService} from './heroes/hero.service';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { HeroesModule } from './heroes/heroes.module';
import { storeFreeze } from 'ngrx-store-freeze';
import { HeroesComponent } from './heroes/heroes.component';


// this would be done dynamically with webpack for builds
const environment = {
  development: true,
  production: false,
};

export const routes: Routes =[
  {
    path:'heroes',
    component: HeroesComponent,
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: '**', component: AppComponent
  }
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
    HeroesModule,
    //StoreModule.forRoot({}, {metaReducers})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }