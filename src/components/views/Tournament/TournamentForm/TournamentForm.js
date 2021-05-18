import { useEffect, useState } from 'react';
import Services from '../../../../services/Services';
import { v4 as uuidv4 } from 'uuid';
import './TournamentForm.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React from "react";
import ReactDOM from "react-dom"
import paypal from 'paypal-checkout';

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function TournamentForm({onSave}) {
  const [users, setUsers] = useState([]);
  const [playerSearch, setPlayerSearch] = useState('');
  const [searchedPlayers, setSearchedPlayers] = useState([]);
  const [validForm, setValidForm] = useState(false);
  const [name, setName] = useState('');
  const [teamSize, setTeamSize] = useState(4);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    Services.users().list((users) => {
      setUsers(users);
    })
  }, []);

  useEffect(() => {
    validate();
  }, [name, teamSize, players]);

  const validate = () => {
    setValidForm(name !== '' && teamSize !== '' && players.length >= teamSize);
  }
 
  const addPlayer = () => {
    setPlayers([...players, {id: uuidv4(), name:''}]);
  };
 
  const setPlayerName = (index, name) => {
    const copy = [...players];
    copy[index].name = name
    setPlayers(copy);
  };
 
  const save = () => {
    if(validForm) {
      Services.tournaments().save({
        created: new Date(),
        open: true,
        name: name,
        teamSize: teamSize,
        players: players,
        teams: []
      });
      onSave();
    }
  };

  const deletePlayer = (index) => {
    const playersCopy = [...players];
    playersCopy.splice(index, 1);
    setPlayers(playersCopy);
  } 

  const searchPlayer = (value) => {
    setPlayerSearch(value)
    if(value !== ''){
      setSearchedPlayers(users.filter((user) => (
        user.name.toLowerCase().includes(value.toLowerCase()) || 
        user.gamerTag.toLowerCase().includes(value.toLowerCase()) || 
        user.email.includes(value.toLowerCase())) && 
        (players.map((player) => player.id).indexOf(user.id) === -1) )
      );
    } else {
      setSearchedPlayers([]);
    }
  };

  const onSearchedPlayerClick = (index) => {
    const playersCopy = [...players];
    playersCopy.push(searchedPlayers[index]);
    searchPlayer('');
    setPlayers(playersCopy);
  }

  const Tournamentplayers = players.map((player, index) => {
    return (
      <CSSTransition key={player.id} timeout={400} classNames='input-list-item'>
        <div className="mb h-layout justify-stretch">
          <input disabled className='flex-grow' id={'playerNameInput'+index} type='text' value={player.name}  placeholder='Player Name' onChange={(e) => setPlayerName(index, e.target.value)}/>
          <button className='btn--secondary text-accent' onClick={() => deletePlayer(index)}><i className='fa fa-minus'></i></button>
        </div>
      </CSSTransition>
    )
  });

  const searchedPlayerList = searchedPlayers.map((player, index) => {
    return <span class="btn btn--sm text-sm" style={{marginRight: 4}} onClick={() => onSearchedPlayerClick(index)}>{player.name}</span>;
  });
  
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

  return (
    <div className='mt v-layout align-stretch'>
      <h2>Create Tournament</h2>
      <div className="v-layout align-stretch">
        <div className="form-group h-layout">
          <input className='flex-grow' id='tournamentNameInput' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Tournament Name'/>
        </div>
        <div className="form-group h-layout">
          <label className='flex-grow mr' htmlFor='teamSizeInput'>Team size</label>
          <input id='teamSizeInput' type='number' value={teamSize} onChange={(e) => setTeamSize(e.target.value)} autoComplete="off"  min="1" max="4"/>
        </div>
      </div>
      <div className="z2 v-layout align-stretch relative">
        <div className='h-layout justify-left'>
          <h3 className='flex-grow'>Add Players</h3>
        </div>
        <input className="mb" type='text' value={playerSearch} onChange={(e) => searchPlayer(e.target.value)} placeholder="Search player ..."/>
        { searchedPlayers.length > 0 && (
          <div className="h-layout card searched-players">
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
