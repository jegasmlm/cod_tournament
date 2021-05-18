import React, { useState, useEffect, useRef } from 'react';
import Services from '../../../services/Services';
import Avatar from '../../elements/Avatar';
import './NavigationBar.css';

function NavigationBar({back}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    const loggedUser = Services.auth().loggedUser();
    Services.users().read(loggedUser.uid, (user) => {
      if(user){
        setUser(user);
        setAvatar(user.avatar)
      }
    })

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const container = useRef(null);

  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  }

  const logout = () => {
    Services.auth().logout();
    window.location = '#';
  }

  return (
    <div className='top-bar'>
      { back && (
        <button className="btn--secondary text-accent" onClick={()=>document.location = "#"}><i className="fa fa-chevron-left"></i></button> 
      )}
      { !back && <div></div>}
      <div className="h-layout">
        <div className="top-bar-user h-layout relative" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          { user && (
          <>
              <Avatar url={avatar}/>
              <h3 className='text-sm hidde-mobile'>{user.name ? user.name : user.email.split('@')[0] }</h3>
              { user.gamerTag && <h4 className='text-sm ml hidde-mobile'>{user.gamerTag}</h4> }
          </>
          )}
          {isMenuOpen && (
            <div ref={container} className="card mt float-menu">
              <button className="btn--sm btn--secondary" onClick={() => document.location = "#editUser/"}>Update info</button>
            </div>
          )}
        </div>
        <button className='btn--secondary' onClick={() => logout()}><i className='fa fa-power-off'></i></button>
      </div>
    </div>
  );
}

export default NavigationBar;
