import moment from 'moment';
import Services from '../../../../../services/Services';
import './TournamentCard.css';
import { toList } from '../../../../../utils/Utils';
import PlayerItem from '../../../../elements/PlayerItem';

function TournamentCard({ tournament }) {

  const players = toList(tournament.players).map((player, index) => {
    return (
      <PlayerItem tooltip style={{marginTop: 8, marginLeft: 8}} ellipsis size='xs' player={player} />
    );
  });

  const deleteTournament = (e) => {
    e.stopPropagation();
    Services.tournaments().delete(tournament.id);
  }

  return (
    <div className='card tournament-card' onClick={() => window.location = '#tournament/' + tournament.id}>
      <div className='h-layout'>
        <h3 className='flex-grow mr-3'>{tournament.name}</h3>
        { tournament.open && <button className='btn--secondary' onClick={(e) => deleteTournament(e)}><i className='fas fa-trash'></i></button> }
      </div>
      <span className='text-sm text-hint'>{moment(tournament.created).format('MM/DD/YYYY')}</span>
      <p>Team size: {tournament.teamSize}</p>
      <h3>Players</h3>
      <div className='h-layout justify-left'>{players}</div>
    </div>
  );
}

export default TournamentCard;
