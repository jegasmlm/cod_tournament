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

function App() {
  const [loggedUser, setLoggedUser] = useState(null)

  useEffect(() => {
    Services.auth().liveLoggedUser((user) => {
      setLoggedUser(user);
    });
  }, []);

  if(loggedUser) {
    return (
      <div className='app'>
        <div className='app-bg'></div>
        { loggedUser !== null && <div className='app-content'>
          <NavigationBar />
          <HashRouter>
            <Switch>
              <Redirect exact from="/login" to="/" />
              <Redirect exact from="/signup" to="/" />
              <Route path="/tournament/:id" component={Tournament} />
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </HashRouter>
        </div> }
      </div>
    );
  }

  return (
    <div className='app'>
      <div className='app-bg'></div>
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
