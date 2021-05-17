import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Services from '../../../../services/Services';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [valid, setValid] = useState(false);

  const signup = () => {
    Services.auth().signup(email, password);
  }

  useEffect(() => {
    setValid(email !== '' && password !== '' && password === confirm)
  }, [email, password, confirm]);

  return (
    <div className='login-container v-layout'>
      <div className='login v-layout ml-3 mr-3'>
        <h2>Warzone Tournaments</h2>

        <input className='mt-3'  type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='mt-2' type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input className='mt-2 mb-3' type='password' name='password' placeholder='Confirm Password' value={confirm} onChange={(e) => setConfirm(e.target.value)}/>

        <button className='mt-3' onClick={() => signup()} disabled={!valid}>Sign up</button>
        <div className='h-layout text-sm mt-3'>
          already have an account?<span className='btn--secondary'><Link to='/login'>Login</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
