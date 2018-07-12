import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeroesComponent } from './heroes.component';
import { HeroService} from './store/services/hero.service';
import { reducers, effects } from './store';

export const routes: Routes = [{ path: '', component: HeroesComponent }];

@NgModule({
  declarations: [
    HeroesComponent 
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('heroes', reducers),
    EffectsModule.forFeature(effects)
  ],
  exports: [RouterModule ],
  providers: [HeroService],
})
export class HeroesModule { }