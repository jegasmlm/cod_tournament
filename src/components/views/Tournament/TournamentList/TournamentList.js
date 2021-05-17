import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TournamentCard from './TournamentCard/TournamentCard';
import './TournamentList.css';

function TournamentList({tournaments}) {

  const tournamentCards = tournaments.map((tournament, index) => {
    return (
      <CSSTransition key={tournament.id} timeout={400} classNames="card">
        <TournamentCard tournament={tournament} tIndex={index}/>
      </CSSTransition>
    )
  });

  return (
    <TransitionGroup className='h-layout tournament-list align-left'>
      {tournamentCards}
    </TransitionGroup>
  );
}

export default TournamentList;
