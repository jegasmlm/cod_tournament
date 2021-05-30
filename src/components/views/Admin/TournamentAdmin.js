import moment from 'moment';
import React from 'react'
import { useEffect, useState } from 'react';
import { fsServices } from '../../../services/Services';
import { toList } from '../../../utils/Utils';
import PlayerItem from '../../elements/PlayerItem';
import Button from '../../elements/Button';
import { Modal } from '../../elements/Modal';
import Table from '../../elements/Table';
import TournamentForm from '../Tournament/TournamentForm/TournamentForm';
import TeamForm from '../Team/TeamForm/TeamForm';
import { v4 as uuidv4 } from 'uuid';

function TournamentAdmin() {
  const [tournaments, setTournaments] = useState([]);
  const [tournament, setTournament] = useState(null);
  const [openForm, setOpenForm] = useState([false]);
  const [team, setTeam] = useState(null);
  const [teamFormOpen, setTeamFormOpen] = useState([false]);

  useEffect(() => {
    const unsubscribe = fsServices.tournaments.list(setTournaments);
    return () => unsubscribe();
  }, []);

  const addTournament = () => {
    setTournament(null)
    setOpenForm([true])
  }

  const onAddTeam = (index) => {
    setTeam(null)
    setTournament(tournaments[index])
    setTeamFormOpen([true])
  }

  const onSaveTeam = (teamPlayers) => {
    const newTeam = team || {id: uuidv4()};
    newTeam.players = teamPlayers;
    fsServices.tournaments.addTeam(tournament.id, newTeam);
  }

  const onSave = (tournament) => {
    fsServices.tournaments.create(tournament)
  }

  const getItem = (key, value, item) => {
    if(key === 'players') {
      return <div className="h-layout">{toList(value).map(player => <PlayerItem className="mr" tooltip size="xs" player={player}/>)}</div>;
    } 
    if (key === 'created'){
      return moment(value.toDate()).fromNow();
    }
    if (key === 'open'){
      return value ? 'OPEN': 'CLOSE';
    }
    if (key === 'teams'){
      return value.length === 0 ? 'empty': (
        <div className="v-layout">
          {value.name && <div>{value.name}</div>}
          {toList(value).map(team => (
            <div className="h-layout flex-nowrap">
              {team && team.players.map(playerId => (
                <PlayerItem size="xs" tooltip player={item.players[playerId]}/>
              ))}
            </div>)
          )}
        </div>
      );
    }
    if (key === 'id'){
      return value.substring(0, 4) + '...';
    }
    return value
  };

  const onEdit = (index) => {
    setTournament(tournaments[index]);
    setOpenForm([true]);
  }

  const onDelete = (index) => {
    fsServices.tournaments.delete(tournaments[index].id);
  }

  const getActions = (index) => (
    <div className="h-layout flex-nowrap">
      <div className="btn btn--secondary btn--sm" onClick={() => onAddTeam(index)}>
        <i className="fas fa-users"></i>
      </div>
      <div className="btn btn--secondary btn--sm" onClick={() => onEdit(index)}>
        <i className="fas fa-edit"></i>
      </div>
      <div className="btn btn--secondary btn--sm" onClick={() => onDelete(index)}>
        <i className="fas fa-trash"></i>
      </div>
    </div>
  );

  return (
    <div className="v-layout">
      <Button style={{alignSelf: 'flex-end'}} onClick={addTournament}>Add Tournament</Button>

      <Table className="mt" data={tournaments} getItem={getItem} getActions={getActions}/>

      <Modal isOpen={teamFormOpen} onRequestClose={() => setOpenForm([false])} size='sm'>
        { tournament && <TeamForm data={team} onSave={onSaveTeam} tournamentId={tournament.id} players={toList(tournament.players)} teamSize={tournament.teamSize} /> }
      </Modal>
      <Modal isOpen={openForm} onRequestClose={() => setOpenForm([false])} size='sm'>
        <TournamentForm data={tournament} onSave={onSave} />
      </Modal>
    </div>
  )
}

export default TournamentAdmin
