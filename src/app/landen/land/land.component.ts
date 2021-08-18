import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Land } from 'src/app/domain/land';
import { LandenLijstService } from 'src/app/providers/landen-lijst.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class UpdateLandComponent implements OnInit {

  formInstance: FormGroup;

  public land: Land = new Land(0, '', '', '');

  constructor(private route: ActivatedRoute, public landenLijstService: LandenLijstService) {

    this.formInstance = new FormGroup({
      id: new FormControl(''),
      naam: new FormControl(''),
      code: new FormControl(''),
      munt: new FormControl('')
    });
  }

  /*
  * Passing complex data types using Query Parameters
  * https://www.c-sharpcorner.com/article/how-to-use-query-parameters-in-angular/
  * How to convert json to/from  object in angular|Typescript
  * https://www.cloudhadoop.com/angular-convert-json-object-parse/
  */

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      this.land = JSON.parse(params.params.land);
      this.formInstance.setValue(this.land);
    });
  }

  update(): void {
    console.log(this.formInstance.value);
    this.landenLijstService.updateLand(this.formInstance.value).subscribe(() => {console.log('done')});
  }

}
