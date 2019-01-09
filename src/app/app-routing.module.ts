import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesComponent } from './wrath-and-glory/character-creation/species/species.component';

const routes: Routes = [
  { path: 'Species', component: SpeciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
