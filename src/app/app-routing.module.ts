import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesComponent } from './wrath-and-glory/character-creation/species/species.component';
import { HomeComponent } from './big-damn-heroes/home/home.component';
import { SelectGameComponent } from './big-damn-heroes/select-game/select-game.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'SelectGame', component: SelectGameComponent },
  { path: 'Species', component: SpeciesComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
