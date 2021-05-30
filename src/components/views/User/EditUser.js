import React, { useState, useEffect } from 'react'
import Services from '../../../services/Services';
import noobAvatar from '../../../assets/imgs/noobAvatar.jpg';
import NavigationBar from '../NavigationBar/NavigationBar';
import UserForm from './UserForm';

function EditUser({onSave}) {
  const [isUpdate, setIsUpdate] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(() => {
    Services.users().readOnce(Services.auth().loggedUser().uid, setUser);
  }, []);

  const saveUser = (user) => {
    const loggedUser = Services.auth().loggedUser();
    if(user.avatar !== loggedUser.photoURL && user.avatarFile){
      Services.storage().uploadAvatar(loggedUser.uid, user.avatarFile, (snapshot) => {
        if(snapshot) {
          Services.storage().getPath(snapshot.ref.fullPath).then((url) => {
            saveUserToFirebase(url);
          })
        }
      });
    } else if(loggedUser.photoURL) {
      saveUserToFirebase(user.avatar);
    } else {
      saveUserToFirebase(noobAvatar);
    }
  };

  const saveUserToFirebase = (avatar) => {
    const copyUser = {...user, id: Services.auth().loggedUser().uid};
    if(isUpdate) {
      Services.users().update(copyUser.id, {...user, avatar: avatar}, () => {
        document.location = "#";
        onSave();
      });
    } else {
      Services.users().save({...user, avatar: avatar}, () => {
        document.location = "#";
        onSave();
      });
    }
  }

  return (
    <div className="v-layout">
      <NavigationBar back/>
      <div className="card align-stretch v-layout">
        <h3>Update your user info</h3>
        <label className="text-sm text-hint">Please update your information so you can participate in tournaments</label>
        <UserForm onSave={saveUser}/>
      </div>
    </div>
  )
}

export default EditUser
