import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandenComponent } from './landen/landen.component';
import { KenJeLandComponent } from './ken-je-land/ken-je-land.component';
import { UpdateLandComponent } from './landen/land/land.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateLandComponent } from './landen/create-land/create-land.component';


@NgModule({
  declarations: [
    AppComponent,
    LandenComponent,
    KenJeLandComponent,
    UpdateLandComponent,
    CreateLandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
