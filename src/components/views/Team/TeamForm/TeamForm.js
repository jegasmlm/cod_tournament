import { useEffect, useState } from 'react';
import Services from '../../../../services/Services';
import PlayerItem from '../../../elements/PlayerItem';
import './TeamForm.css';

function TeamForm({players, teamSize, onSave}) {
  const [validForm, setValidForm] = useState(false);
  const [playerIndices, setPlayerIndices] = useState([])

  const select = (index, value) => {
    const teamCopy = [...playerIndices];
    if(value){
      teamCopy.push(index);
    } else {
      const indexToRemove = playerIndices.indexOf(index);
      if (indexToRemove > -1) {
        teamCopy.splice(indexToRemove, 1);
      }
    }
    const teamCopySliced = teamCopy.slice(Math.max(0, teamCopy.length-teamSize), teamCopy.length);
    setPlayerIndices(teamCopySliced);
  }

  useEffect(() => {
    players.forEach((player, index) => {
      if(playerIndices.indexOf(index) === -1){
        document.getElementById((player.id || player)+'_checkbox').checked = false
      }
    });
    validate();
  }, [playerIndices]);

  const validate = () => {
    setValidForm(playerIndices.length === parseInt(teamSize));
  }

  const save = () => {
    if(validForm) {
      Services.names().getName().then((name) => {
        /*Services.tournaments().saveTeam(tournamentId, {
          name: name,
          tournamentId: tournamentId,
          players: team.map((index) => players[index]),
          matches: []
        });*/
        onSave(name, playerIndices.map(index => players[index].id));
      })
    }
  }

  const playerCheckboxes = players.map((player, index) => {
    return (
      <div key={index} className="h-layout mt">
        <PlayerItem htmlFor={(player.id || player)+'_checkbox'} className='flex-grow mr' player={player} horizontal/>
        <input type='checkbox' id={(player.id || player)+'_checkbox'} checked={playerIndices.indexOf(index) > -1} onChange={(e) => select(index, e.target.checked)}/>
      </div>
    )
  });

  return (
    <div className='v-layout align-stretch'>
      <div>
        <h3 className='text-accent'>Players</h3>
        {playerCheckboxes}
      </div>
      <button className='mt' onClick={save} disabled={!validForm}>save</button>
    </div>
  );
}

export default TeamForm;
