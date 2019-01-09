import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { SharedModule } from "./shared/shared.module";
import { SpeciesComponent } from './wrath-and-glory/character-creation/species/species.component';
import { HomeComponent } from './big-damn-heroes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SpeciesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
