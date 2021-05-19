import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import './RandomTeams.css';
import Services from '../../../services/Services';
import PlayerItem from '../../elements/PlayerItem';

let teamNames = [];

function RandomTeams({tournamentId, teamSize, players, onSave}) {
  const [error, setError] = useState(null);
  const [randomTeams, setRandomTeams] = useState([{name: '', players: []}])

  useEffect(() => {
    setNewNames().then(() => {
      generate();
    }).catch((e) => {
      setError(e.message);
    });
  }, [])

  const setNewNames = async () => {
    teamNames = [];
    const teamCount = players.length / teamSize;
    for(let i = 0; i < teamCount; i++){
      const randomName = await Services.names().getName();
      teamNames.push(randomName === 'undefined undefined' ? uuidv4().substring(0, 4) : randomName);
    }
    return teamNames;
  }

  const generate = () => {
    const teamCount = players.length / teamSize;

    const playersShuffled =  _.shuffle(players);
    const randomTeams = []
    for(let i = 0; i < teamCount; i++) {
        const teamPlayers = [];
        for(let j = 0; j < teamSize; j++) {
          if(i*teamSize + j < players.length){
            teamPlayers.push(playersShuffled[i*teamSize + j])
          }
        }
        randomTeams.push({
          id: uuidv4(),
          name: teamNames[i],
          tournamentId: tournamentId,
          players: teamPlayers,
          matches: []
        })
    }
    
    setRandomTeams(randomTeams);
  }

  const saveTeams = (teams) => {
    Services.tournaments().saveTeams(tournamentId, teams);
  }

  const save = async () => {
    saveTeams(randomTeams);
    await setNewNames();
    onSave();
  }

  const teams = randomTeams.map((team, index) => {
    const players = team.players.map((player) => <PlayerItem className='mr' key={player.id || player} player={player}/>)
    return (
      <div className='mb-3' key={index}>
        <h3>{team.name}</h3>
        <div className='h-layout justify-left'>{players}</div>
      </div>
      
    )
  })

  return (
    <div>
      {error && <span>{error}</span>}
      {teams}
      <div className='h-layout justify-stretch'>
        <button className='flex-grow' onClick={() => generate()} >Generate</button>
        <button className='ml' onClick={() => save()} >save</button>
      </div>
    </div>
  );
}

export default RandomTeams;
