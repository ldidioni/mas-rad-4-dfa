import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './security/login-page/login-page.component';
import { LogoutButtonComponent } from './security/logout-button/logout-button.component';
import { FormsModule } from '@angular/forms';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiTokenInterceptorService } from "./api/api-token-interceptor.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LogoutButtonComponent,
    DummyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiTokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }