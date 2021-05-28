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
    return tournamentRef.set({[`teams.${match.teamId}.${match.id}`]: match});
  }

  listByPlayer(playerId, callback, live = true) {
    return this.list(callback, [[`players.${playerId}.name`, '>', '']], live)
  }

}

export const NAME = 'matches';