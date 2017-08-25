import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  teams: Team[] = [
    new Team("08/31/2017", "1200", "North Seattle Community College", 10, "Basketball")
  ];


  constructor() { }

  ngOnInit() {
  }

}
