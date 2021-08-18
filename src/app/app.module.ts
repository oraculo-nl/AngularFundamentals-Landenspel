import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandenComponent } from './landen/landen.component';
import { KenJeLandComponent } from './ken-je-land/ken-je-land.component';
import { LandComponent } from './landen/land/land.component';

@NgModule({
  declarations: [
    AppComponent,
    LandenComponent,
    KenJeLandComponent,
    LandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
