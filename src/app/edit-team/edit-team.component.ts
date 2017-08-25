import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamService } from '../team.service';



@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
  providers: [TeamService]
})

export class EditTeamComponent implements OnInit {
  @Input() selectedTeam;

  constructor(private teamService: TeamService) { }

  ngOnInit() {
  }

  beginUpdatingTeam(teamToUpdate) {
    this.teamService.updateTeam(teamToUpdate);
  }

  beginDeletingTeam(teamToDelete) {
    if(confirm("Are you sure you want to delete this event?")){
      this.teamService.deleteTeam(teamToDelete);
    }
  }

}
