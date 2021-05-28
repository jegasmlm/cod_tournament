import { fsServices } from "../Services";
import Service from "./Service";

export default class UserService extends Service {

  constructor() {
    super(NAME);
  }

  async duplicate(user) {
    const tournaments = await fsServices.tournaments.listByPlayer(user.id, null, false);
    const matches = await fsServices.matches.listByPlayer(user.id, null, false)
    if(tournaments.length === 0 && matches.length === 0) return user;
    const batch = this.db.batch();
    tournaments.foreach((tournament) => batch.set(fsServices.tournaments.doc(tournament.id), {[`players.${user.id}`]: user}));
    matches.foreach((match) => batch.set(fsServices.matches.doc(match.id), {[`players.${user.id}`]: user}));
    return batch.commit();
  }

  getStatistics(id, callback) {
    fsServices.tournaments.liveList(tournaments => {

    }, [["playerIds", "array-contains", id]])
  }

}

export const NAME = 'users';