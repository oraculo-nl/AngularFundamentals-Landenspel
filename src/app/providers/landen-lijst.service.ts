import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Land } from '../domain/land';

@Injectable({
  providedIn: 'root'
})
export class LandenLijstService {

  landen:Land[] = [new Land(1, 'Verenigde Staten','US','Dollar'),new Land(2, 'Nederland','NL','Euro'),
  new Land(3, 'Verenigd Koninkrijk','UK','Pond')];


  constructor() { }

  public getLanden() : Observable<Land[]>{
    return of(this.landen);
  }

  public updateLand(land:Land):Observable<{}> {
    let index = this.landen.findIndex(l => l.id == land.id);
    this.landen[index] = land;
    console.log(this.landen);
    return of({});
  }

  public createLand(land:Land):Observable<{}> {
    this.landen.push(land);
    return of({});

  }

  public deleteLand(id:number):Observable<{}> {
    return of({});
  }
}
