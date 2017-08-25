import { Injectable } from '@angular/core';
import { Team } from './team.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class TeamService {
  teams: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.teams = database.list('teams');
  }

  getTeams() {
    return this.teams;
  }

  addTeam(newTeam: Team) {
    this.teams.push(newTeam);
  }

  getTeamById(teamId: string) {
    return this.database.object('teams/' + teamId);

  }

  updateTeam(localUpdatedTeam) {
    var teamEntryInFirebase = this.getTeamById(localUpdatedTeam.$key);
    teamEntryInFirebase.update({date: localUpdatedTeam.date, time: localUpdatedTeam.time, location: localUpdatedTeam.location, player: localUpdatedTeam.player, sport: localUpdatedTeam.sport});
  }
}
