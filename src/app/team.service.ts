import { Injectable } from '@angular/core';
import { Team } from './team.model';


@Injectable()
export class TeamService {

  constructor() { }
  
  getTeams() {
    return
  }

  getTeamById(teamId: number) {
    for (var i = 0; i < teams.length - 1; i++) {
      if (teams[i].id === teamId) {
        return teams[i];
      }
    }
  }
}
