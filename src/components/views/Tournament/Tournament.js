import { useEffect, useState } from 'react';
import Services from '../../../services/Services';
import './Tournament.css';
import TeamList from '../Team/TeamList/TeamList';
import Results from '../Results/Results';
import { Modal } from '../../elements/Modal';
import TeamForm from '../Team/TeamForm/TeamForm';
import moment from 'moment';
import RandomTeams from '../RandomTeams/RandomTeams';
import NavigationBar from '../NavigationBar/NavigationBar';
import { toList } from '../../../utils/Utils';
import PlayerItem from '../../elements/PlayerItem';

function Tournament(props) {
  const [modalIsOpen, setIsOpen] = useState([false]);
  const [randomTeamsIsOpen, setRandomTeamsIsOpen] = useState([false]);
  const [tournament, setTournament] = useState({
    name: '',
    teamSize: 0,
    players: [],
    teams: []
  });

  useEffect(() => {
    loadTournament();
    return () => {
      Services.tournaments().detach();
    };
  }, []);

  const loadTournament = () => {
    Services.tournaments().read((tournament) => {
      setTournament(tournament);
    }, props.match.params.id)
  }

  const onSaveTeam = (team) => {
    setIsOpen([false]);
  }

  const onSaveRandomTeams = (teams) => {
    setRandomTeamsIsOpen([false]);
  }

  const closeTournament = () => {
    Services.tournaments().close(tournament.id);
  }

  const players = toList(tournament.players).map((player, index) => {
    return (
      <PlayerItem className="mr" size="sm" key={player.id || index} player={player}/>
    )
  })

  return (
    <div className='tournament v-layout'>
      <NavigationBar back/>
      <h2>{tournament.name}</h2>
      <div className='mb h-layout'>
        <div className='mr-3'><span className='text-accent text-sm'>Date</span> {moment(tournament.created).format('MM/DD/YYYY')}</div>
        <div><span className='text-accent text-sm'>Team size</span> {tournament.teamSize}</div>
      </div>
      <div className='h-layout'>{players}</div>
      { tournament.teams && <Results tournament={tournament} /> }
      <h3 className='mt-3'>Teams</h3>
      { tournament.open && <div className='h-layout'>
        <button className='mr mb btn--danger' onClick={() => closeTournament()}>Close Tournament</button>
        <button className='mr mb' onClick={() => setRandomTeamsIsOpen([true])}>Generate Teams</button>
        <button className="mb" onClick={() => setIsOpen([true])}>Add Team</button>
      </div> }
      { tournament.teams && <TeamList tournamentOpen={tournament.open} tournamentId={tournament.id}/> }
      
      <Modal
          isOpen={(modalIsOpen)}
          onRequestClose={() => setIsOpen([false])}
          size='sm'
        >
        <TeamForm tournamentId={tournament.id} players={toList(tournament.players)} teamSize={tournament.teamSize} onSave={onSaveTeam} />
      </Modal>
      
      <Modal
          isOpen={randomTeamsIsOpen}
          onRequestClose={() => setRandomTeamsIsOpen([false])}
          size='sm'
        >
        <RandomTeams tournamentId={tournament.id} teamSize={tournament.teamSize} players={toList(tournament.players)} onSave={onSaveRandomTeams} />
      </Modal>
    </div>
  );
}

export default Tournament;
