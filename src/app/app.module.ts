import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './Comps/nav/nav.component';
import { HomeComponent } from './Comps/home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Comps/login/login.component';
import { SignupComponent } from './Comps/signup/signup.component';

@NgModule({
  declarations: [AppComponent, NavComponent, HomeComponent, LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
