import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LandenLijstService } from 'src/app/providers/landen-lijst.service';

@Component({
  selector: 'app-create-land',
  templateUrl: './create-land.component.html',
  styleUrls: ['./create-land.component.css']
})
export class CreateLandComponent implements OnInit {

  formInstance: FormGroup;

  constructor(private landenLijstService: LandenLijstService) {
    this.formInstance = new FormGroup({
      naam: new FormControl(''),
      code: new FormControl(''),
      munt: new FormControl('')
    });

   }

  ngOnInit(): void {
  }

  create() : void {
    this.landenLijstService.createLand(this.formInstance.value).subscribe(() => { });
  }
}
