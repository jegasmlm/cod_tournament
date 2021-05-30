import Service from "./Service";
import firebase from '../Firebase';
import { fsServices } from "../Services";

export default class MatchService extends Service {

  constructor(tournamentService) {
    super(NAME);
    this.tournament = tournamentService;
  }

  duplicate(match) {
    const tournamentRef = fsServices.tournaments.doc(match.tournamentId);
    return tournamentRef.update({[`teams.${match.teamId}.${match.id}`]: match});
  }

  deleteDuplicates(id) {
    const match = this.read(id, null, null, false);
    const tournamentRef = fsServices.tournaments.doc(match.tournamentId);
    return tournamentRef.update({[`teams.${match.teamId}.${match.id}`]: firebase.firestore.FieldValue.delete()});
  }

  listByPlayer(playerId, callback, live = true) {
    return this.list(callback, [[`players.${playerId}.name`, '>', '']], live)
  }

}

export const NAME = 'matches';