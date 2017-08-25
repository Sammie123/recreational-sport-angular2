import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { Router } from '@angular/router';
import { TeamService } from '../team.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [TeamService]
})

export class ListingComponent implements OnInit {
  constructor(private router: Router, private teamService: TeamService) { }

  teams: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  goToDetailPage(clickedTeam) {
    this.router.navigate(['teams', clickedTeam.$key]);
  }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
  }

  submitForm(date: string, time: string, location: string, player: number, sport: string) {
    var newTeam: Team = new Team(date, time, location, player, sport);
    this.teamService.addTeam(newTeam);
  }

}
