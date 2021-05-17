import React, { useState, useEffect } from 'react';
import Services from '../../../services/Services';
import './NavigationBar.css';
import noobAvatar from '../../../assets/imgs/noobAvatar.jpg';

function NavigationBar() {
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(noobAvatar)

  useEffect(() => {
    const loggedUser = Services.auth().loggedUser();
    Services.users().read(loggedUser.uid, (user) => {
      if(user){
        setUser(user);
        setAvatar(user.avatar)
      }
    })
  }, []);

  const logout = () => {
    Services.auth().logout();
    window.location = '#';
  }

  return (
    <div className='top-bar'>
      { user && (
       <>
          <img className='avatar mr' src={avatar}/>
          <h3 className='text-sm'>{user.name ? user.name : user.email.split('@')[0] }</h3>
       </>
       )}
      <button className='btn--secondary' onClick={() => logout()}><i className='fa fa-power-off'></i></button>
    </div>
  );
}

export default NavigationBar;
