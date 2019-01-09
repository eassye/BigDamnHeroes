import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDropdownComponent } from './nav-dropdown/nav-dropdown.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [NavDropdownComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavDropdownComponent,
    LoginComponent
  ]
})
export class SharedModule { }
