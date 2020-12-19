import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { Page404Component } from './component/page404/page404.component';
import { RegisterComponent } from './component/register/register.component';
import { FormCatComponent } from './form-cat/form-cat.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"dashbord",
    component:DashbordComponent
  },
  {
    path:"Cat",
    component:CatComponent
  },
  {
    path:"FormCat",
    component:FormCatComponent
  },
  //404
  {
    path:"**",
    component:Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
