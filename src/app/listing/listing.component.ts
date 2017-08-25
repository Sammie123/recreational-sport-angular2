import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [TeamService]
})
export class ListingComponent implements OnInit {
  constructor(private router: Router, private teamService: TeamService) { }

  teams: Team[];

  goToDetailPage(clickedTeam: Team) {
    this.router.navigate(['teams', clickedTeam.id]);
  }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

}
