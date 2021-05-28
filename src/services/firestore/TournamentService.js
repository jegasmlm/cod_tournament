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
      "teams": firebase.firestore.FieldValue.arrayUnion(team)
    })
  }

}

export const NAME = 'tournaments';