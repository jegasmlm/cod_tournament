import { useState } from 'react';
import Services from '../../../../../services/Services';
import { Modal } from '../../../../elements/Modal';
import MatchForm from '../../../Match/MatchForm/MatchForm';
import MatchList from '../../../Match/MatchList/MatchList';
import './TeamCard.css';

function TeamCard({ tournamentOpen, team}) {
  const [modalIsOpen, setIsOpen] = useState([false]);
  console.log(team);
 
  const onDeleteMatch = (e, match) => {
    e.stopPropagation();
    Services.tournaments().deleteMatch(team.tournamentId, team.id, match.id);
  };

  const deleteTeam = () => {
    Services.tournaments().deleteTeam(team.tournamentId, team.id);
  };

  const onSaveMatch = () => {
    setIsOpen([false]);
  };

  const players = team.players.map((player, index) => <span className='mr text-sm' key={player.id || index}>{player.name || player}</span>)

  return (
    <div className='card v-layout align-stretch'>
      <div className='h-layout'>
        <h3 className='text-sm flex-grow'>{team.name ? team.name : team.id.substring(0, 4)}</h3>
        { tournamentOpen && <button className='btn--secondary' onClick={() => deleteTeam()}><i className='fas fa-trash'></i></button> }
      </div>
      { tournamentOpen && <button className='btn--tertiary flex-grow' onClick={() => setIsOpen([true])}>Add Match</button> }
      <h4 className='text-sm text-bold text-accent'>Players</h4>
      <div className='h-layout justify-stretch'>{players}</div>

      <h4 className='text-sm text-bold text-accent'>Matches</h4>
      <MatchList tournamentOpen={tournamentOpen} tournamentId={team.tournamentId} teamId={team.id} onDelete={(e, match) => onDeleteMatch(e, match)}/>
      
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setIsOpen([false])}
          size='sm'
        >
        <MatchForm team={team} onSave={() => onSaveMatch()} />
      </Modal>
    </div>
  );
}

export default TeamCard;
