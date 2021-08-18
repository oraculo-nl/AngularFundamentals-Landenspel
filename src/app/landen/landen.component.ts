import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Land } from '../domain/land';
import { LandService } from '../providers/land.service';
import { LandenLijstService } from '../providers/landen-lijst.service';

@Component({
  selector: 'app-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.css']
})
export class LandenComponent implements OnInit {


  landen:Land[] = [];

  constructor(private landenLijstService:LandenLijstService, private landService:LandService, private router:Router) {}

  ngOnInit(): void {
    this.landenLijstService.getLanden().subscribe(
      (landen: Land[]) => this.landen = landen,
      (error => console.log(error))
    )
  }

  onClick(land:Land) :void {
    this.landService.land = land;
    // console.log(this.landService.land);
    this.router.navigate(['/landen/land']);
  }

}
