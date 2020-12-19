import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { Page404Component } from './component/page404/page404.component';
import { SidebarreComponent } from './component/sidebarre/sidebarre.component';
import { TopbarreComponent } from './component/topbarre/topbarre.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatComponent } from './cat/cat.component';
import { FormCatComponent } from './form-cat/form-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    Page404Component,
    SidebarreComponent,
    TopbarreComponent,
    CatComponent,
    FormCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
