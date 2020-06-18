import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginPageComponent } from './security/login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { LogoutButtonComponent } from './security/logout-button/logout-button.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DummyPageComponent,
    LogoutButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
