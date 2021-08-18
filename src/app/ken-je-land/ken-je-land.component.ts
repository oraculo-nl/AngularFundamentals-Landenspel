import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Land } from '../domain/land';
import { LandenLijstService } from '../providers/landen-lijst.service';

@Component({
  selector: 'app-ken-je-land',
  templateUrl: './ken-je-land.component.html',
  styleUrls: ['./ken-je-land.component.css']
})
export class KenJeLandComponent implements OnInit {

  formInstance: FormGroup;
  land: Land = new Land(0, '', '', '');

  constructor(private landenLijstService: LandenLijstService) {
    this.formInstance = new FormGroup({
      code: new FormControl(''),
      munt: new FormControl('')
    });

  }

  ngOnInit(): void {
    this.land = this.landenLijstService.getRandomLand();
    console.log(this.land.id);

  }

  raad(): void {
    console.log(this.land);
  }
}
