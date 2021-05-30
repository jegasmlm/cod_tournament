import { fsServices } from "../Services";
import Service from "./Service";

export default class ResultService extends Service {

  constructor(){
    super(NAME);
  }

  duplicate(result) {
    return fsServices.tournaments.doc(result.id).update({result: result});
  }

  async add(match) {
    const result = await this.read(match.tournamentId, null, null, false);
    if(!result){
      return super.create(match.playerScore, match.tournamentId);
    }

    Object.keys(result).forEach(playerId => {
      Object.keys(result[playerId]).forEach(attr => {
        if(match.playerScore[playerId] && match.playerScore[playerId][attr])
          result[playerId][attr] += match.playerScore[playerId][attr];
      })
    })

    return this.update(result.id, result);
  }

  listByPlayer(playerId, callback, live = true) {
    return this.list(callback, [[`playerScore.${playerId}.kills`, '>', '']], live);
  }

}

export const NAME = 'results';