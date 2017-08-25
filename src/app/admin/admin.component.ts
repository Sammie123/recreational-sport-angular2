import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [TeamService]
})
export class AdminComponent implements OnInit {

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  submitForm(date: string, time: string, location: string, player: number, sport: string) {
    var newTeam: Team = new Team(date, time, location, player, sport);
    this.teamService.addTeam(newTeam);
  }

}
