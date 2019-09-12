import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AuthService } from  './auth.service';

var config = {
  apiKey: "AIzaSyD-VD0YDamaCO3JcUZg5fhmpeP_8NVKBhM",
    authDomain: "angular-portfolio-c6907.firebaseapp.com",
    databaseURL: "https://angular-portfolio-c6907.firebaseio.com",
    projectId: "angular-portfolio-c6907",
    storageBucket: "angular-portfolio-c6907.appspot.com",
    messagingSenderId: "1018326161011",
    appId: "1:1018326161011:web:ffaaaedc5aa5da98"
};
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( config),
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',pathMatch:'full',redirectTo:'signup'},
      {path:'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
      {path:'home',component:HomeComponent},
    ]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
