import Services from '../../../services/Services';
import './NavigationBar.css';

function NavigationBar() {
  const user = Services.auth().loggedUser();

  const logout = () => {
    Services.auth().logout();
    window.location = '#';
  }

  return (
    <div className='top-bar'>
      <img className='avatar mr' src={user.photoURL}/>
      <h3 className='text-sm'>{user.displayName ? user.displayName : user.email.split('@')[0] }</h3>
      <button className='btn--secondary' onClick={() => logout()}><i className='fa fa-power-off'></i></button>
    </div>
  );
}

export default NavigationBar;
