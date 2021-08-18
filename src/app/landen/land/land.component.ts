import { AfterContentChecked, Component} from '@angular/core';
import { Land } from 'src/app/domain/land';
import { LandService } from 'src/app/providers/land.service';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class UpdateLandComponent implements AfterContentChecked {


  land:Land = new Land('','','');

  constructor(private landService:LandService) {
  }

  ngAfterContentChecked(): void {
    this.land = this.landService.land;

  }


}
