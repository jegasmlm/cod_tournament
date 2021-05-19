import React, { useState, useEffect, useRef } from 'react'
import Services from '../../../services/Services';
import noobAvatar from '../../../assets/imgs/noobAvatar.jpg';
import NavigationBar from '../NavigationBar/NavigationBar';
import { validate } from 'uuid';
import Avatar from '../../elements/Avatar';

function EditUser({onSave}) {
  const [avatar, setAvatar] = useState(Services.auth().loggedUser().photoURL);
  const [email, setEmail] = useState(Services.auth().loggedUser().email);
  const [name, setName] = useState(Services.auth().loggedUser().displayName);
  const [codUsername, setCodUsername] = useState('');
  const [platform, setPlatform] = useState('battlenet');
  const [gamerTag, setGamerTag] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [valid, setValid] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  const avatarInput = useRef(null);

  useEffect(() => {
    Services.users().readOnce(Services.auth().loggedUser().uid, (user) => {
      if(user){
        setIsUpdate(true);
        setAvatar(user.avatar);
        setEmail(user.email);
        setName(user.name);
        setCodUsername(user.codUsername);
        setPlatform(user.platform);
        setGamerTag(user.gamerTag);
      }
    })
  }, []);

  useEffect(() => {
    const filled = name !== '' && codUsername !== '' && gamerTag !== '';
    let validTag = true;
    if(platform === 'battlenet'){
      const splitTag = gamerTag.split("#");
      if(splitTag.length !== 2 || isNaN(splitTag[1]) || isNaN(parseFloat(splitTag[1]))){
        validTag = false
      }
    } else {
      validTag = !isNaN(gamerTag) && !isNaN(parseFloat(gamerTag));
    }
    setValid(filled && validTag);
  }, [name, codUsername, gamerTag, platform])

  const changeAvatar = () => {
    if(avatarInput) {
      avatarInput.current.click();
    }
  };

  const loadImage = (e) => {
    try{
      if(e.target.files.length > 0) {
        setAvatarFile(e.target.files[0]);
        const avatarUrl = URL.createObjectURL(e.target.files[0])
        setAvatar(avatarUrl);
      }
    } catch(e) {

    }
  }

  const onCodUsernameChanged = (value) => {
    setCodUsername(value);
  };

  const onGamerTagChanged = (value) => {
    setGamerTag(value);
  };

  const saveUser = () => {
    const loggedUser = Services.auth().loggedUser();
    if(avatar !== loggedUser.photoURL && avatarFile){
      Services.storage().uploadAvatar(loggedUser.uid, avatarFile, (snapshot) => {
        if(snapshot) {
          Services.storage().getPath(snapshot.ref.fullPath).then((url) => {
            saveUserToFirebase(url);
          })
        }
      });
    } else if(loggedUser.photoURL) {
      saveUserToFirebase(avatar);
    } else {
      saveUserToFirebase(noobAvatar);
    }
  };

  const saveUserToFirebase = (avatar) => {
    if(isUpdate) {
      Services.users().update(Services.auth().loggedUser().uid, {
        id: Services.auth().loggedUser().uid,
        name: name,
        email: email,
        avatar: avatar,
        codUsername: codUsername,
        platform: platform,
        gamerTag: gamerTag,
      }, () => {
        document.location = "#";
        onSave();
      });
    } else {
      Services.users().save({
        id: Services.auth().loggedUser().uid,
        name: name,
        email: email,
        avatar: avatar,
        codUsername: codUsername,
        platform: platform,
        gamerTag: gamerTag,
      }, () => {
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
        <div className="h-layout mt-2">
          <input ref={avatarInput} type='file' accept="image/png, image/jpeg"  hidden onChange={(e) => loadImage(e)}/>
          <div style={{cursor: 'pointer'}} className="avatar avatar--big relative" onClick={() => changeAvatar()}>
            <Avatar size="xl" url={avatar || null}/>
            <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '128px', height: '128px', background: '#0004', borderRadius: '50%'}}></div>
            <label style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}><i className="fas fa-upload"></i></label>
          </div>
        </div>
        <div className="mt text-sm text-hint" style={{alignSelf: 'center'}}>You can upload a new avatar</div>
        <div className="mt-2 justify-stretch align-center form-group">
          <label style={{minWidth: '30%'}} className="mr">Email</label>
          <input className="flex-grow" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
        </div> 
        <div className="form-group mt">
          <label style={{minWidth: '30%'}} className="mr">Name</label>
          <input className="flex-grow" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tournament username ..."/>
        </div> 
        <div className="form-group mt">
          <label style={{minWidth: '30%'}} className="mr">Call of duty<br/>username</label>
          <input className="flex-grow" value={codUsername} onChange={(e) => onCodUsernameChanged(e.target.value)} placeholder="Your call of duty username ..."/>
        </div> 
        <div className="mb text-sm text-hint">The exact username you use in call of duty, so we can track your progress</div>
        <div className="form-group mt">
          <select  style={{minWidth: '30%'}} value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option className="select-option" value="battlenet">BattleNet</option>
            <option className="select-option" value="activision">Activision</option>
          </select>
          <input className="flex-grow " placeholder={platform === 'battlenet' ? 'Battlenet Id (Bob#2586)...' : 'Actividion Id ...'} value={gamerTag} onChange={(e) => onGamerTagChanged(e.target.value)}/>
        </div> 
        <button className="mt" onClick={() => saveUser()} disabled={!valid}>Save</button>
      </div>
    </div>
  )
}

export default EditUser
