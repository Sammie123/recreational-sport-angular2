import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  constructor(private router: Router) { }

  teams: Team[] = [
    new Team("08/31/2017", "1200", "North Seattle Community College", 10, "Basketball", 1)
  ];

  goToDetailPage(clickedTeam: Team) {
    this.router.navigate(['teams', clickedTeam.id]);
  }

  ngOnInit() {
  }

}
