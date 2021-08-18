import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KenJeLandComponent } from './ken-je-land/ken-je-land.component';
import { UpdateLandComponent } from './landen/land/land.component';
import { LandenComponent } from './landen/landen.component';

const routes: Routes = [{
  path: 'landen', component: LandenComponent,
  children: [{ path: 'land', component: UpdateLandComponent }]
},
{ path: 'ken-je-land', component: KenJeLandComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
