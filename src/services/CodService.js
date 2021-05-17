export default class CodService {

  uriEncode(string) {
    return encodeURIComponent(string);
  }

  getPlayerInfo(playerId) {
    return fetch(`https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${this.uriEncode(playerId)}/profile/type/mp`).then((data) => {
      return data.json();
    });
  }

  playerFriends(playerId) {
    return fetch(`https://my.callofduty.com/api/papi-client/stats/cod/v1/title/mw/platform/battle/gamer/${this.uriEncode(playerId)}/profile/friends/type/mp`).then((data) => {
      return data.json();
    });
  }

  matchInfo(matchId) {
    return fetch(`https://www.callofduty.com/api/papi-client/crm/cod/v2/title/mw/platform/battle/fullMatch/wz/${matchId}/it`).then((data) => {
      return data.json();
    });
  }

}