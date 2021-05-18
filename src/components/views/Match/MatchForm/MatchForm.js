import { useState } from 'react';
import Services from '../../../../services/Services';
import { v4 as uuidv4 } from 'uuid';
import './MatchForm.css';
import { useEffect } from 'react';
import CodService from '../../../../services/CodService';

const codService = Services.cod();

function MatchForm({team, onSave}) {
  const [loadingMatch, setLoadginMatch] = useState(false);
  const [matchId, setMatchId] = useState('');
  const [validForm, setValidForm] = useState(false);
  const [match, setMatch] = useState({
    id: uuidv4(),
    created: new Date(),
    position: '',
    teamScore: team.players.map((player) => {
      return {
        player: player,
        kills: '',
        damage: ''
      }
    })
  })

  useEffect(() => {
    validate();
  }, [match]);

  const loadMatch = () => {
    if(matchId !== '' && !loadingMatch){
      setLoadginMatch(true);
      codService.matchInfo(matchId).then((codMatch) => {
        setLoadginMatch(false);
        const matchCopy = {...match};
        match.teamScore.forEach((playerScore, index) => {
          if(playerScore.player.codUsername){
            codMatch.data.allPlayers.forEach((codPlayer) => {
              if(codPlayer.player.username.toLowerCase().includes(playerScore.player.codUsername.toLowerCase())) {
                matchCopy.teamScore[index].kills = codPlayer.playerStats.kills;
                matchCopy.teamScore[index].damage = codPlayer.playerStats.damageDone;
                matchCopy.position = codPlayer.playerStats.teamPlacement;
              }
            });
          }
        });
        matchCopy.codId = matchId;
        setMatch(matchCopy);
        //console.log(codMatch);
      });
    }
  }

  const validate = () => {
    let validTeamScore = true;
    match.teamScore.forEach(score => {
      if(score.kills === '' || score.damage === ''){
        validTeamScore = false;
      }
    });
    setValidForm(match.position !== '' && validTeamScore);
  }

  const setPlayerKills = (index, value) => {
    const matchCopy = {...match};
    matchCopy.teamScore[index].kills = value;
    setMatch(matchCopy);
  }

  const setPlayerDamage = (index, value) => {
    const matchCopy = {...match};
    matchCopy.teamScore[index].damage = value;
    setMatch(matchCopy);
  }

  const setMatchPosition = (value) => {
    const matchCopy = {...match};
    matchCopy.position = value;
    setMatch(matchCopy);
  }

  const save = () => {
    if(validForm){
      Services.tournaments().saveMatch(team.tournamentId, team.id, match)
      onSave();
    }
  }

  const teamScore = match.teamScore.map((score, index) => {
    return (
      <div key={index} className="form-group match-player-form">
        <label className='flex-grow mr'>{score.player.name || score.player}</label>
        <input id={'playerNameInput'+index} type='number' value={score.kills}  placeholder='Kills' onChange={(e) => setPlayerKills(index, e.target.value)} autoComplete="off"  min="1" max="100"/>
        <input className="ml" id={'playerNameInput'+index} type='number' value={score.damage}  placeholder='Dmg' onChange={(e) => setPlayerDamage(index, e.target.value)} autoComplete="off"  min="1" max="100000"/>
      </div>
    )
  });

  return (
    <div className='v-layout align-stretch'>
      <div>
        <div className="form-group h-layout">
          <label className='flex-grow' htmlFor='matchPositionInput'>Match Id</label>
          <input className="ml mr" id='matchIdInput' type='text' value={matchId} onChange={(e) => setMatchId(e.target.value)} />
          <button onClick={() => loadMatch()}>Load</button>
        </div>
        <div className="form-group h-layout">
          <label className='flex-grow' htmlFor='matchPositionInput'>Match Position</label>
          <input id='matchPositionInput' type='number' value={match.position} onChange={(e) => setMatchPosition(e.target.value)} autoComplete="off" min="1" max="99"/>
        </div>
      </div>
      <div>
        <h3 className='flex-grow text-accent'>Players</h3>
        {teamScore}
      </div>
      <button onClick={() => save()} disabled={!validForm}>save</button>
    </div>
  );
}

export default MatchForm;
