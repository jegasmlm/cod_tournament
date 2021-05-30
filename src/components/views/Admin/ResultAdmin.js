import React from 'react'
import { useState, useEffect } from 'react';
import { fsServices } from '../../../services/Services'
import Avatar from '../../elements/Avatar';
import Button from '../../elements/Button';
import { Modal } from '../../elements/Modal';
import Table from '../../elements/Table';
import MatchForm from '../Match/MatchForm/MatchForm';

function ResultAdmin() {
  const [results, setResults] = useState([])

  useEffect(() => {
    const unsubscribe = fsServices.results.list(setResults);
    return () => {
      unsubscribe();
    }
  }, [])

  const getItem = (key, value) => {
    return value
  };

  return (
    <div className="v-layout">
      <Table className="mt" data={results} getItem={getItem} />
    </div>
  )
}

export default ResultAdmin
