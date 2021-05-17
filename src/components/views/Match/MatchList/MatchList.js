import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Services from '../../../../services/Services';
import MatchCard from './MatchCard/MatchCard';
import './MatchList.css';

function MatchList({tournamentOpen, tournamentId, teamId, onDelete}) {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    loadMatches();
  }, [teamId])

  const loadMatches = () => {
    Services.tournaments().listMatches((matches) => {
      setMatches(matches);
    }, tournamentId, teamId)
  }

  const matchCards = matches.map((match, index) => {
    return (
      <CSSTransition key={match.id} timeout={400} classNames="card">
        <MatchCard tournamentOpen={tournamentOpen} match={match} onDelete={onDelete}/>
      </CSSTransition>
    )
  });

  return (
    <TransitionGroup className='match-list'>
      {matchCards}
    </TransitionGroup>
  );
}

export default MatchList;
