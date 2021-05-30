import Service from "./Service";
import firebase from "../Firebase";

export default class TournamentService extends Service {

  constructor() {
    super(NAME);
  }

  listByPlayer(playerId, callback, live = true) {
    return this.list(callback, [[`players.${playerId}.name`, '>', '']], live);
  }

  addTeam(tournamentId, team){
    this.doc(tournamentId).update({
      [`teams.${team.id}`]: team
    })
  }

  deleteTeam(tournamentId, teamId) {
    this.doc(tournamentId).update({
      [`teams.${teamId}`]: firebase.firestore.FieldValue.delete()
    })
  }

}

export const NAME = 'tournaments';