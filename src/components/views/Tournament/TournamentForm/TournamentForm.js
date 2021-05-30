import { useEffect, useState } from 'react';
import Services from '../../../../services/Services';
import './TournamentForm.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from "react";
//import ReactDOM from "react-dom"
//import paypal from 'paypal-checkout';
import { toList } from '../../../../utils/Utils';
import PlayerItem from '../../../elements/PlayerItem';
import FormGroup from '../../../elements/FormGroup';

//const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function TournamentForm({onSave, data}) {
  const [users, setUsers] = useState([]);
  const [playerSearch, setPlayerSearch] = useState('');
  const [searchedPlayers, setSearchedPlayers] = useState({});
  const [validForm, setValidForm] = useState(false);
  const [tournament, setTournament] = useState(data || {
    name: '',
    teamSize: 4,
    players: {},
    teams: [],
    created: new Date(),
    open: true,
  })

  useEffect(() => {
    Services.users().list((users) => {
      setUsers(users);
    })
  }, []);

  useEffect(() => {
    validate();
  }, [tournament]);

  const validate = () => {
    setValidForm(tournament.name !== '' && tournament.teamSize !== '' && toList(tournament.players).length >= tournament.teamSize);
  }
 
  const setPlayerName = (index, name) => {
    const copy = {...tournament.players};
    copy[index].name = name;
    setTournament({...tournament, players: copy});
  };
 
  const save = () => {
    if(validForm) {
      Services.tournaments().save(tournament);
      onSave(tournament);
    }
  };

  const deletePlayer = (index) => {
    const playersCopy = {...tournament.players};
    delete playersCopy[index];
    setTournament({...tournament, players: playersCopy});
  } 

  const searchPlayer = (value) => {
    setPlayerSearch(value)
    if(value !== ''){
      const filteredUsers = users.filter((user) => (
        user.name.toLowerCase().includes(value.toLowerCase()) || 
        user.gamerTag.toLowerCase().includes(value.toLowerCase()) || 
        user.email.includes(value.toLowerCase())) && 
        (toList(tournament.players).map((player) => player.id).indexOf(user.id) === -1) );
      const searchObject = {}
      filteredUsers.forEach((user) => {
        searchObject[user.id] = user;
      })
      setSearchedPlayers(searchObject);
    } else {
      setSearchedPlayers({});
    }
  };

  const onSearchedPlayerClick = (index) => {
    const playersCopy = {...tournament.players};
    playersCopy[index] = searchedPlayers[index];
    searchPlayer('');
    setTournament({...tournament, players: playersCopy});
  }

  const Tournamentplayers = toList(tournament.players).map((player) => {
    return (
      <CSSTransition key={player.id} timeout={400} classNames='input-list-item'>
        <div className="mb h-layout justify-stretch">
          <input disabled className='flex-grow' id={'playerNameInput'+player.id} type='text' value={player.name}  placeholder='Player Name' onChange={(e) => setPlayerName(player.id, e.target.value)}/>
          <button className='btn--secondary text-accent' onClick={() => deletePlayer(player.id)}><i className='fa fa-minus'></i></button>
        </div>
      </CSSTransition>
    )
  });

  const searchedPlayerList = toList(searchedPlayers).map((player) => {
    return (
      <PlayerItem className="btn btn--secondary btn--sm h-layout" style={{marginRight: 4, marginTop: 4}} player={player} size='sm' onClick={() => onSearchedPlayerClick(player.id)}/>
    );
  });
  
  /*
  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  */

  return (
    <div className='mt v-layout align-stretch'>
      <h2>Create Tournament</h2>
      <div className="v-layout align-stretch">
        <div className="form-group h-layout">
          <input className='flex-grow' id='tournamentNameInput' type='text' value={tournament.name} onChange={(e) => setTournament({...tournament, name: e.target.value})} placeholder='Tournament Name'/>
        </div>
        <FormGroup label="Team size" type='number' value={tournament.teamSize} onChange={(e) => setTournament({...tournament, teamSize: e.target.value})} autoComplete="off"  min="1" max="4"/>
      </div>
      <div className="z2 v-layout align-stretch relative">
        <div className='h-layout justify-left'>
          <h3 className='flex-grow'>Add Players</h3>
        </div>
        <input className="mb" type='text' value={playerSearch} onChange={(e) => searchPlayer(e.target.value)} placeholder="Search player ..."/>
        { toList(searchedPlayers).length > 0 && (
          <div className="h-layout justify-left card float-menu searched-players">
            {searchedPlayerList}
          </div>
        )}
        <TransitionGroup >
          {Tournamentplayers}
        </TransitionGroup>
      </div>
      {/*<PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />*/}
      <button class="z1" onClick={() => save()} disabled={!validForm}>save</button>
    </div>
  );
}

export default TournamentForm;
