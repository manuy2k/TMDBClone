import { MatModule } from './modules/mat/mat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageLaunchComponent } from './components/homepage-launch/homepage-launch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageLaunchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
