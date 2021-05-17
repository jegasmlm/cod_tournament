import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../../../services/Services';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [valid, setValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    Services.auth().getRedirectResult((result, error) => {
      if(error) {
        setErrorMessage(error.message);
      }
    })
  }, [])

  const login = () => {
    Services.auth().login(email, password).catch((error) => {
      if(error) {
        setErrorMessage(error.message);
      }
    });
  }

  useEffect(() => {
    setValid(email !== '' && password !== '')
  }, [email, password])

  return (
    <div className='login-container v-layout'>
      <div className='login v-layout ml-3 mr-3'>
        <h2>Warzone Tournaments</h2>

        { errorMessage !== ''  && <div> {errorMessage} </div>}
        <input className='mt-3'  type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='mt-2 mb-3' type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>

        <button className='mt-3' onClick={() => login()} disabled={!valid}>LOGIN</button>
        <div className='h-layout text-sm mt-3'>
          don't have an account?<span className='btn--secondary'><Link to='/signup'>Sign up</Link></span>
        </div>
      </div>

      <div className='socials h-layout mt-2'>
        <button className='mr mt' onClick={() => Services.auth().googleLogin()}><i className='fa-2x fab fa-google'></i></button>
        <button className='mt' onClick={() => Services.auth().facebookLogin()}><i className='fa-2x fab fa-facebook'></i></button>
        {/*<button className='mr mt' onClick={() => Services.auth().appleLogin()}><i className='fa-2x fab fa-apple'></i></button>
        <button className='mr mt' onClick={() => Services.auth().twitterLogin()}><i className='fa-2x fab fa-twitter'></i></button>
        <button className='mt' onClick={() => Services.auth().microsoftLogin()}><i className='fa-2x fab fa-microsoft'></i></button>*/}
      </div>
    </div>
  );
}

export default Login;
