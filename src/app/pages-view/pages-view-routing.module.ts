import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{
  path: 'login',
  component: LoginPageComponent
},
{
  path: 'home',
  component: HomePageComponent
},
{
  path: '', 
  redirectTo:'login',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesViewRoutingModule { }
