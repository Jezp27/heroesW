import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HeroesComponent } from './heroes.component';
import { EditHeroComponent} from './edit-heroes/edit-hero.component';
import { HeroService} from './store/services/hero.service';
import { reducers, effects } from './store';

export const routes: Routes = [{ path: '', component: HeroesComponent },
                              { path: 'heroes', component: HeroesComponent },
                              { path: ':nickname', component: EditHeroComponent },
                            ];

@NgModule({
  declarations: [
    HeroesComponent, 
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('heroes', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [HeroesComponent, EditHeroComponent],
  providers: [HeroService],
})
export class HeroesModule { }