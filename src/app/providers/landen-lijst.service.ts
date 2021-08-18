import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Land } from '../domain/land';

@Injectable({
  providedIn: 'root'
})
export class LandenLijstService {

  landen:Land[] = [new Land('Verenigde Staten','US','Dollar'),new Land('Nederland','NL','Euro'),
  new Land('Verenigd Koninkrijk','UK','Pond')];


  constructor() { }

  public getLanden() : Observable<Land[]>{
    return of(this.landen);
  }

  public updateLand(land:Land):Observable<Land> {
    // foundLand = landen.find( landNaam => landNaam == land.naam)
    return of(new Land('','',''));
  }

  public createLand(land:Land):Observable<{}> {
    this.landen.push(land);
    return of({});

  }

  public deleteLand(landNaam:string):Observable<{}> {
    this.landen = this.landen.filter( land => land.naam != landNaam);
    return of({});
  }
}
