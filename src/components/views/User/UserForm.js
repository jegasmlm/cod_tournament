import React, { useState, useEffect, useRef } from 'react'
import Avatar from '../../elements/Avatar';
import FormGroup from '../../elements/FormGroup';

function UserForm({data, onSave}) {
  const [valid, setValid] = useState(false);
  const [avatarFile, setAvatarFile] = useState(null);
  const [user, setUser] = useState(data || {
    avatar: null,
    email: '',
    name: '',
    codUsername: '',
    platform: '',
    gamerTag: '',
  });

  const avatarInput = useRef(null);

  useEffect(() => {
    const filled = user.name !== '' && user.codUsername !== '' && user.gamerTag !== '';
    let validTag = true;
    if(user.platform === 'battlenet'){
      const splitTag = user.gamerTag.split("#");
      if(splitTag.length !== 2 || isNaN(splitTag[1]) || isNaN(parseFloat(splitTag[1]))){
        validTag = false
      }
    } else {
      validTag = !isNaN(user.gamerTag) && !isNaN(parseFloat(user.gamerTag));
    }
    setValid(filled && validTag);
  }, [user])

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
        setUser({...user, avatar: avatarUrl});
      }
    } catch(e) {

    }
  }

  return (
    <div className="v-layout align-stretch">
      <div className="h-layout mt-2">
        <input ref={avatarInput} type='file' accept="image/png, image/jpeg"  hidden onChange={(e) => loadImage(e)}/>
        <div style={{cursor: 'pointer'}} className="avatar avatar--big relative" onClick={() => changeAvatar()}>
          <Avatar size="xl" url={user.avatar || null}/>
          <div style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '128px', height: '128px', background: '#0004', borderRadius: '50%'}}></div>
          <label style={{position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)'}}><i className="fas fa-upload"></i></label>
        </div>
      </div>
      <div className="mt text-sm text-hint" style={{alignSelf: 'center'}}>You can upload a new avatar</div>
      <FormGroup label="Email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} disabled />
      <FormGroup label="Name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} />
      <FormGroup label={<span>Call of duty<br/>username</span>} value={user.codUsername} onChange={(e) => setUser({...user, codUsername: e.target.value})} hint="The exact username you use in call of duty, so we can track your progress"/>
      <div className="form-group mt">
        <select  style={{minWidth: '30%'}} value={user.platform} onChange={(e) => setUser({...user, platform: e.target.value})}>
          <option className="select-option" value="battlenet">BattleNet</option>
          <option className="select-option" value="activision">Activision</option>
        </select>
        <input className="flex-grow " placeholder={user.platform === 'battlenet' ? 'Battlenet Id (Bob#2586)...' : 'Actividion Id ...'} value={user.gamerTag} onChange={(e) => setUser({...user, gamerTag: e.target.value})}/>
      </div> 
      <button className="mt" onClick={() => onSave(user)} disabled={!valid}>Save</button>
    </div>
  )
}

export default UserForm
