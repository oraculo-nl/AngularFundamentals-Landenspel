import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Land } from '../domain/land';

@Injectable({
  providedIn: 'root'
})
export class LandenLijstService {

  landen: Land[] = [new Land(1, 'Verenigde Staten', 'US', 'Dollar'), new Land(2, 'Nederland', 'NL', 'Euro'),
  new Land(3, 'Verenigd Koninkrijk', 'UK', 'Pond')];


  constructor() { }

  public getLanden(): Observable<Land[]> {
    return of(this.landen);
  }

  public updateLand(land: Land): Observable<{}> {
    let index = this.landen.findIndex(l => l.id == land.id);
    if (index > -1) {
      this.landen[index] = land;
    }
    return of({});
  }

  public createLand(land: Land): Observable<{}> {
    land.id = this.landen.length + 1;
    this.landen.push(land);
    return of({});

  }

  public deleteLand(id: number): Observable<{}> {
    let index = this.landen.findIndex(l => l.id == id);
    if (index > -1) {
      this.landen.splice(index,1);
    }
    return of({});
  }

  getRandomLand() : Land {
    let land:Land;
    let min = 0;
    let max = this.landen.length-1;
    let randomIndex =  Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive

    return this.landen[randomIndex];
  }

}
