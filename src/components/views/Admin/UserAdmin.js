import React from 'react'
import { useState, useEffect } from 'react';
import { fsServices } from '../../../services/Services'
import Avatar from '../../elements/Avatar';
import Button from '../../elements/Button';
import { Modal } from '../../elements/Modal';
import Table from '../../elements/Table';
import UserForm from '../User/UserForm';

function UserAdmin() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null);
  const [openForm, setOpenForm] = useState([false]);

  useEffect(() => {
    const unsubscribe = fsServices.users.list(setUsers);
    return () => {
      unsubscribe();
    }
  }, [])

  const addUser = () => {
    console.log("add user")
    setUser(null)
    setOpenForm([true])
  }

  const onSave = (user) => {
    fsServices.users.create(user)
  }

  const getItem = (key, value) => {
    if(key === 'avatar') {
      return <Avatar url={value}/>;
    } 
    return value
  };

  const onEdit = (index) => {
    setUser(users[index]);
    setOpenForm([true]);
  }

  const onDelete = (index) => {
    fsServices.users.delete(users[index].id);
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
      <Button style={{alignSelf: 'flex-end'}} onClick={addUser}>Add User</Button>

      <Table className="mt" data={users} getItem={getItem} getActions={getActions} />

      <Modal isOpen={openForm} onRequestClose={() => setOpenForm([false])} size='sm'>
        <UserForm data={user} onSave={onSave} />
      </Modal>
    </div>
  )
}

export default UserAdmin
