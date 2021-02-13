import { MatModule } from './modules/mat/mat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageLaunchComponent } from './components/homepage-launch/homepage-launch.component';
import { WhatspopularComponent } from './components/whatspopular/whatspopular.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageLaunchComponent,
    WhatspopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
