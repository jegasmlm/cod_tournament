import _ from "lodash";
import { toList } from "../utils/Utils";
import firebase from './Firebase';

// Get a reference to the database service
var database = firebase.database();

export default class TournamentService {
  
  detach() {
    database.ref('t').off();
  }

  save(tournament) {
    const newTournamentRef = database.ref().child('t').push();
    tournament.id = newTournamentRef.key;
    newTournamentRef.set(tournament);
  }

  update(id, tournament) {
    database.ref(`t/${id}`).set(tournament);
  }

  close(tournamentId) {
    var updates = {};
    updates['/t/' + tournamentId + '/open/'] = false;
    return database.ref().update(updates);
  }

  delete(id) {
    database.ref(`t/${id}`).remove();
  }

  list(callback) {
    database.ref(`t`).on('value', (snapshot) => {
      callback(toList(snapshot.val()));
    });
  }

  read(callback, id) {
    database.ref(`t/${id}`).on('value', (snapshot) => {
      const tournament = snapshot.val();
      if(tournament && tournament.teams){
        Object.keys(tournament.teams).forEach((key) => {
          const fullPlayers = [];
          tournament.teams[key].players.forEach((teamPlayer) => {
            fullPlayers.push(toList(tournament.players).find(player => player.id === teamPlayer));
          });
          tournament.teams[key].players = fullPlayers;
        });
      }
      callback(tournament);
    });
  }

  saveTeam(tournamentId, team) {
    const cleanTeam = {...team, players: team.players.map(player => player.id)}
    const newTeamtRef = database.ref().child(`t/${tournamentId}/teams/`).push();
    cleanTeam.id = newTeamtRef.key;
    newTeamtRef.set(cleanTeam);
  }

  deleteTeam(tournamentId, teamId) {
    database.ref(`t/${tournamentId}/teams/${teamId}`).remove();
  }

  listPlayers(callback, id) {
    database.ref(`t/${id}/players/`).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

  listTeams(callback, tournamentId) {
    this.read((tournament) => {
      if(tournament){
        callback(toList(tournament.teams));
      }
    }, tournamentId);
  }

  getTeam(callback, tournamentId, id) {
    database.ref(`t/${tournamentId}/teams/${id}`).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

  saveMatch(tournamentId, teamId, match) {
    const newMatchtRef = database.ref().child(`t/${tournamentId}/teams/${teamId}/matches`).push();
    match.id = newMatchtRef.key;
    newMatchtRef.set(match);
  }

  deleteMatch(tournamentId, teamId, matchId) {
    database.ref(`t/${tournamentId}/teams/${teamId}/matches/${matchId}`).remove();
  }

  listMatches(callback, tournamentId, teamId) {
    database.ref(`t/${tournamentId}/teams/${teamId}/matches`).on('value', (snapshot) => {
      callback(toList(snapshot.val()));
    });
  }

  getMatch(callback, tournamentId, teamId, id) {
    database.ref(`t/${tournamentId}/teams/${teamId}/matches/${id}`).on('value', (snapshot) => {
      callback(snapshot.val());
    });
  }

  saveTeams(tournamentId, teams) {
    teams.forEach((team) => {
      this.saveTeam(tournamentId, team);
    });
  }

  searchById(list, id) {
    let index = -1;
    list.forEach((item, i) => {
      if(item.id === id){
        index = i;
      }
    })
    return index;
  }

  getMatchPoint(match) {
    return this.getPositionPoint(match.position) + this.getMatchKills(match);
  }

  getMatchKills(match) {
    return _.sum(match.teamScore.map((score) => parseInt(score.kills)));
  }

  getPositionPoint(position) {
    switch(position) {
      case '1': return 20;
      case '2': return 15;
      case '3': return 10;
      case '4': return 5;
      case '5': return 3;
      case '6': return 2;
      default: return 0;
    }
  }

  getKillPoint(kills) {
    return kills;
  }

  getDamagePoint(dmg) {
    return 0;
  }

  getScorePoint(score) {
    return 0;
  }

  getResults(tournament) {
    const players = toList({...tournament.players});
    const playersResultObject = {};
    players.forEach((player) => {
      if(!playersResultObject[player.id]){
        playersResultObject[player.id] = {
          player: player,
          kills: 0,
          damage: 0,
          points: 0,
          total: 0
        }
      }
      Object.keys(tournament.teams).forEach((teamKey) => {
        const team = tournament.teams[teamKey]; 
        if(team.matches){
          Object.keys(team.matches).forEach((matchKey) => {
            const match = team.matches[matchKey];
            if(team.players.indexOf(player) > -1){
              playersResultObject[player.id]['points'] += this.getPositionPoint(match.position);
              playersResultObject[player.id]['total'] += this.getPositionPoint(match.position);
            }
            match.teamScore.forEach((score) => {
              if(player.id === score.player.id) {
                playersResultObject[player.id]['kills'] += parseInt(score.kills);
                playersResultObject[player.id]['damage'] += parseInt(score.damage);
                playersResultObject[player.id]['total'] += parseInt(score.kills);
              }
            })
          })
        }
      })
    })

    const playersResult = [];
    Object.keys(playersResultObject).forEach((key) => {
      playersResult.push(playersResultObject[key]);
    })

    return {
      players: _.orderBy(playersResult, ['total'], ['desc']),
      teams: _.orderBy(toList(tournament.teams).map((team) => {
        const kills = _.sumBy(toList(team.matches), (match) => _.sumBy(match.teamScore, (score) => parseInt(score.kills)));
        const points = _.sumBy(toList(team.matches), (match) => this.getPositionPoint(match.position));
        return {
          teamId: team.id,
          name: team.name,
          players: team.players,
          kills: kills,
          damage: _.sumBy(toList(team.matches), (match) => _.sumBy(match.teamScore, (score) => parseInt(score.damage))),
          points: points,
          total: kills + points
        }
      }), ['total'], ['desc'])
    };
  }

}