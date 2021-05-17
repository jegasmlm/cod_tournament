import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Services from '../../../../services/Services';
import TeamCard from './TeamCard/TeamCard';
import './TeamList.css';

function TeamList({tournamentOpen, tournamentId}) {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    loadTeams();
  }, [tournamentId])

  const loadTeams = () => {
    Services.tournaments().listTeams((teams) => {
      setTeams(teams);
    }, tournamentId)
  }

  const teamCards = teams.map((team, index) => {
    return (
      <CSSTransition key={team.id} timeout={400} classNames="card">
        <TeamCard tournamentOpen={tournamentOpen} team={team}/>
      </CSSTransition>
    )
    });

  return (
    <TransitionGroup className='team-list h-layout align-left'>
      {teamCards}
    </TransitionGroup>
  );
}

export default TeamList;
