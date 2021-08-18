import { Component, OnInit } from '@angular/core';
import { Land } from '../domain/land';
import { LandenLijstService } from '../providers/landen-lijst.service';

@Component({
  selector: 'app-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.css']
})
export class LandenComponent implements OnInit {


  landen:Land[] = [];

  constructor(private landenLijstService:LandenLijstService) {}

  ngOnInit(): void {
    this.landenLijstService.getLanden().subscribe(
      (landen: Land[]) => this.landen = landen,
      (error => console.log(error))
    )
  }

}
