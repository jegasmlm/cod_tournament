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
  const [validForm, setValidForm] = useState(false);
  const [name, setName] = useState('');
  const [teamSize, setTeamSize] = useState(4);
  const [players, setPlayers] = useState([{id: uuidv4(), name:''}, {id: uuidv4(), name:''}, {id: uuidv4(), name:''}, {id: uuidv4(), name:''}]);

  useEffect(() => {
    validate();
  }, [name, teamSize, players]);

  const validate = () => {
    let validPlayers = true;
    const validatedPlayers = []
    players.forEach((player) => {
      if(player.name === '' || validatedPlayers.indexOf(player.name) > -1){
        validPlayers = false;
      } else {
        validatedPlayers.push(player.name)
      }
    });
    setValidForm(name !== '' && teamSize !== '' && validPlayers);
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
        players: players.map((player) => player.name),
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

  const playersInput = players.map((player, index) => {
    return (
      <CSSTransition key={player.id} timeout={400} classNames='input-list-item'>
        <div className="mb h-layout justify-stretch">
          <input className='flex-grow' id={'playerNameInput'+index} type='text' value={player.name}  placeholder='Player Name' onChange={(e) => setPlayerName(index, e.target.value)}/>
          <button className='btn--secondary text-accent' onClick={() => deletePlayer(index)}><i className='fa fa-minus'></i></button>
        </div>
      </CSSTransition>
    )
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
      <div>
        <div className="form-group h-layout">
          <input className='flex-grow' id='tournamentNameInput' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Tournament Name'/>
        </div>
        <div className="form-group h-layout">
          <label className='flex-grow' htmlFor='teamSizeInput'>Team size</label>
          <input id='teamSizeInput' type='number' value={teamSize} onChange={(e) => setTeamSize(e.target.value)} autoComplete="off"  min="1" max="4"/>
        </div>
      </div>
      <div>
        <div className='h-layout justify-left'>
          <h3 className='flex-grow'>Players</h3>
          <button className='btn--secondary' onClick={() => addPlayer()}><i className='fa fa-plus'></i></button>
        </div>
        <TransitionGroup >
          {playersInput}
        </TransitionGroup>
      </div>
      {/*<PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />*/}
      <button onClick={() => save()} disabled={!validForm}>save</button>
    </div>
  );
}

export default TournamentForm;
