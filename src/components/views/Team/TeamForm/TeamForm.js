import { useEffect, useState } from 'react';
import Services from '../../../../services/Services';
import PlayerItem from '../../../elements/PlayerItem';
import './TeamForm.css';

function TeamForm({tournamentId, players, teamSize, onSave}) {
  const [validForm, setValidForm] = useState(false);
  const [team, setTeam] = useState([])

  const select = (index, value) => {
    const teamCopy = [...team];
    if(value){
      teamCopy.push(index);
    } else {
      const indexToRemove = team.indexOf(index);
      if (indexToRemove > -1) {
        teamCopy.splice(indexToRemove, 1);
      }
    }
    const teamCopySliced = teamCopy.slice(Math.max(0, teamCopy.length-teamSize), teamCopy.length);
    setTeam(teamCopySliced);
  }

  useEffect(() => {
    players.forEach((player, index) => {
      if(team.indexOf(index) === -1){
        document.getElementById((player.id || player)+'_checkbox').checked = false
      }
    });
    validate();
  }, [team]);

  const validate = () => {
    setValidForm(team.length === parseInt(teamSize));
  }

  const save = () => {
    if(validForm) {
      Services.names().getName().then((name) => {
        Services.tournaments().saveTeam(tournamentId, {
          name: name,
          tournamentId: tournamentId,
          players: team.map((index) => players[index]),
          matches: []
        });
        onSave(team);
      })
    }
  }

  const playerCheckboxes = players.map((player, index) => {
    return (
      <div key={index} className="h-layout mt">
        <PlayerItem htmlFor={(player.id || player)+'_checkbox'} className='flex-grow mr' player={player} horizontal/>
        <input type='checkbox' id={(player.id || player)+'_checkbox'} checked={team.indexOf(index) > -1} onChange={(e) => select(index, e.target.checked)}/>
      </div>
    )
  });

  return (
    <div className='v-layout align-stretch'>
      <div>
        <h3 className='text-accent'>Players</h3>
        {playerCheckboxes}
      </div>
      <button className='mt' onClick={() => save()} disabled={!validForm}>save</button>
    </div>
  );
}

export default TeamForm;
