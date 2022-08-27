import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesViewRoutingModule } from './pages-view-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    ListPageComponent,
    FormPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    PagesViewRoutingModule
  ]
})
export class PagesViewModule { }
