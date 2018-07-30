import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HeroesComponent } from './heroes.component';
import { EditHeroComponent } from './edit-heroes/edit-hero.component';
import { HeroService } from './store/services/hero.service';
import { reducers } from './store';
import { HeroEffects } from './store/effects/hero.effect';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const routes: Routes = [{ path: '', component: HeroesComponent },
{ path: 'heroes', component: HeroesComponent },
{ path: ':id', component: EditHeroComponent }];

@NgModule({
  declarations: [
    HeroesComponent,
    EditHeroComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('heroes', reducers),
    EffectsModule.forFeature([HeroEffects]),
    NgbModule
  ],
  exports: [HeroesComponent, EditHeroComponent],
  providers: [HeroService],
})

export class HeroesModule { }