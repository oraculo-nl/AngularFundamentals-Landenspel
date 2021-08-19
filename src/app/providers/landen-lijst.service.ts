import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Land } from '../domain/land';

@Injectable({
  providedIn: 'root'
})
export class LandenLijstService {

  landen: Land[] = [new Land(1, 'Verenigde Staten', 'US', 'USD'),
  new Land(2, 'Nederland', 'NL', 'EUR'),
  new Land(3, 'Verenigd Koninkrijk', 'UK', 'GBP'),
  new Land(4, 'Duitsland', 'DE', 'EUR'),
  new Land(5, 'Frankrijk', 'FR', 'EUR'),
  new Land(6, 'Rusland', 'RU', 'RUB'),
  new Land(7, 'China', 'CN', 'RMB'),
];


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
    let min = 1;
    let max = this.landen.length;
    let randomIndex =  this.getRndInteger(min, max);

    return this.landen[randomIndex];
  }

  //This JavaScript function always returns a random number between min (included) and max (excluded):
  getRndInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
}
