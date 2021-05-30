import React from 'react'
import { useState, useEffect } from 'react';
import { fsServices } from '../../../services/Services'
import Avatar from '../../elements/Avatar';
import Button from '../../elements/Button';
import { Modal } from '../../elements/Modal';
import Table from '../../elements/Table';
import MatchForm from '../Match/MatchForm/MatchForm';

function MatchAdmin() {
  const [matches, setMatches] = useState([])
  const [match, setMatch] = useState(null);
  const [openForm, setOpenForm] = useState([false]);

  useEffect(() => {
    const unsubscribe = fsServices.matches.list(setMatches);
    return () => {
      unsubscribe();
    }
  }, [])

  const addMatch = () => {
    console.log("add match")
    setMatch(null)
    setOpenForm([true])
  }

  const onSave = (match) => {
    fsServices.matches.create(match)
  }

  const getItem = (key, value) => {
    return value
  };

  const onEdit = (index) => {
    setMatch(matches[index]);
    setOpenForm([true]);
  }

  const onDelete = (index) => {
    fsServices.matches.delete(matches[index].id);
  }

  const getActions = (index) => (
    <div className="h-layout flex-nowrap">
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
      <Button style={{alignSelf: 'flex-end'}} onClick={addMatch}>Add Match</Button>

      <Table className="mt" data={matches} getItem={getItem} getActions={getActions} />

      <Modal isOpen={openForm} onRequestClose={() => setOpenForm([false])} size='sm'>
        <MatchForm data={match} onSave={onSave} />
      </Modal>
    </div>
  )
}

export default MatchAdmin