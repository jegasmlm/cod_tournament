import React, { useState, useRef } from 'react'
import Services from '../../../services/Services';
import noobAvatar from '../../../assets/imgs/noobAvatar.jpg';

function EditUser({onSave}) {
  const [avatar, setAvatar] = useState(Services.auth().loggedUser().photoURL);
  const [email, setEmail] = useState(Services.auth().loggedUser().email);
  const [name, setName] = useState(Services.auth().loggedUser().displayName);
  const [platform, setPlatform] = useState('battlenet');
  const [gamerTag, setGamerTag] = useState('');
  const [avatarFile, setAvatarFile] = useState(null);
  const [valid, setValid] = useState(false);

  const avatarInput = useRef(null);

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

  const onGamerTagChanged = (value) => {
    setValid(value && value !== '');
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
    Services.users().save({
      id: Services.auth().loggedUser().uid,
      name: name,
      email: email,
      avatar: avatar,
      platform: platform,
      gamerTag: gamerTag,
    }, () => {
      onSave();
    });
  }

  return (
    <div className="v-layout mt ml mb mr" style={{height: '100vh'}}>
      <div className="card align-stretch v-layout">
        <h3>Update your user info</h3>
        <label className="text-sm text-hint">Please update your information so you can participate in tournaments</label>
        <div className="h-layout mt-2" style={{position: 'relative'}}>
          <input ref={avatarInput} type='file' accept="image/png, image/jpeg"  hidden onChange={(e) => loadImage(e)}/>
          <div style={{cursor: 'pointer'}} className="avatar avatar--big" onClick={() => changeAvatar()}>
            <img className="avatar avatar--big" src={avatar || noobAvatar}/>
            <label style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}><i className="fas fa-upload"></i></label>
          </div>
        </div>
        <div className="mt-2 justify-stretch align-center form-group">
          <label style={{minWidth: '30%'}}>Email</label>
          <input className="flex-grow ml" value={email} onChange={(e) => setEmail(e.target.value)} disabled />
        </div> 
        <div className="form-group mt">
          <label style={{minWidth: '30%'}}>Name</label>
          <input className="flex-grow ml" value={name} onChange={(e) => setName(e.target.value)}/>
        </div> 
        <div className="form-group mt">
          <select  style={{minWidth: '30%'}} value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option className="select-option" value="battlenet">BattleNet</option>
            <option className="select-option" value="activision">Activision</option>
          </select>
          <input className="flex-grow ml" placeholder="Gamer tag ..." value={gamerTag} onChange={(e) => onGamerTagChanged(e.target.value)}/>
        </div> 
        <button className="mt" onClick={() => saveUser()} disabled={!valid}>Save</button>
      </div>
    </div>
  )
}

export default EditUser
