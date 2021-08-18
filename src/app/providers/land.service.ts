import { Injectable } from '@angular/core';
import { Land } from '../domain/land';


/*
* use this to pass land object between components
* see also: https://www.thepolyglotdeveloper.com/2016/10/passing-complex-data-angular-2-router-nativescript/
*/

@Injectable({
  providedIn: 'root'
})
export class LandService {

  public land: Land = new Land('','','');

  constructor() { }
}
