import './App.css';

import React, { useEffect, useState } from "react";
import {
  Switch,
  Route,
  HashRouter,
  Redirect
} from "react-router-dom";
import Home from './components/views/Home/Home';
import Tournament from './components/views/Tournament/Tournament';
import Services from './services/Services';
import Login from './components/views/Auth/Login/Login';
import Signup from './components/views/Auth/Signup/Signup';
import NavigationBar from './components/views/NavigationBar/NavigationBar';
import EditUser from './components/views/User/EditUser';

function App() {
  const [auth, setAuth] = useState({loggedUser: null, isUserSet: false})

  useEffect(() => {
    Services.auth().liveLoggedUser((user) => {
      if(user) {
        Services.users().read(user.uid, (res) => {
          if(res){
            setAuth({loggedUser: user, isUserSet: true})
          } else {
            setAuth({loggedUser: user, isUserSet: false})
          }
        });
      } else {
        setAuth({loggedUser: null, isUserSet: false})
      }
    });
  }, []);

  if(auth.loggedUser) {
    return (
      <div className='app'>
        <div className='app-bg'></div>
        <div className='app-content'>
          <NavigationBar />
          <HashRouter>
            <Switch>
              { !auth.isUserSet && (
                <>
                  <Route path="/editUser">
                    <EditUser onSave={() => setAuth({...auth, isUserSet: true})} />
                  </Route>
                  <Redirect to="/editUser"/>
                </>
              )}
              <Redirect exact from="/login" to="/" />
              <Redirect exact from="/signup" to="/" />
              <Route path="/tournament/:id" component={Tournament} />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </HashRouter>
        </div>
      </div>
    );
  }

  return (
    <div className='app'>
      <div className='app-bg'></div>
      <HashRouter>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
