import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './security/login-page/login-page.component';
import { LogoutButtonComponent } from './security/logout-button/logout-button.component';
import { RegisterPageComponent } from './security/register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DummyPageComponent } from './dummy-page/dummy-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ApiTokenInterceptorService } from "./api/api-token-interceptor.service";
import { IssueListComponent } from './issue/issue-list/issue-list.component';
import { IssueEditComponent } from './issue/issue-edit/issue-edit.component';
import { MenuComponent } from './menu/menu.component';
import { FilterFormComponent } from './issue/issue-list/filter-form.component';

import { MatButtonModule } from '@angular/material/button'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatMenuModule } from '@angular/material/menu'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select'; 
import { MatTableModule } from '@angular/material/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IssueNewComponent } from './issue/issue-new/issue-new.component';


@NgModule({
  declarations: [
    AppComponent,
    DummyPageComponent,
    FilterFormComponent,
    IssueEditComponent,
    IssueListComponent,
    LoginPageComponent,
    LogoutButtonComponent,
    MenuComponent,
    RegisterPageComponent,
    IssueNewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTableModule
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