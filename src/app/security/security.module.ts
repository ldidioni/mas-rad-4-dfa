import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LoginPageComponent, LogoutButtonComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule 
  ],
  exports: [
    LoginPageComponent,
    LogoutButtonComponent,
    RegisterPageComponent
  ],
})
export class SecurityModule { }
