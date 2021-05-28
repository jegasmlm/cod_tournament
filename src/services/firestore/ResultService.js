import Service from "./Service";

export default class ResultService extends Service {

  constructor(){
    super(NAME);
  }

  duplicate(result) {

  }

  async add(match) {
    const result = await this.read(match.tournamentId, null, null, false);
    if(!result){
      return super.create(match)
    }
  }

  listByPlayer(playerId, callback, live = true) {
    return this.list(callback, [[`playerScore.${playerId}.kills`, '>', '']], live);
  }

}

export const NAME = 'results';