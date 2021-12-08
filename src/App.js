import React, {useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';

import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PublicRoute from "./components/Router/PublicRoute";
import PrivateRoute from "./components/Router/PrivateRoute";
import Profile from "./components/Profile";
import { loadStorageItem, saveItemInStorage, deleteStorageItem } from './utils/localStorage';
import withSettings from './components/HOCs/withSettings';

const App = ({ translate: __ }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!loadStorageItem("user"));

  const handleLogout = history => {
    setIsLoggedIn(false);
    deleteStorageItem('user');
    history.push('/');
  }

  const handleLogin = (token, history) => {
    setIsLoggedIn(true);
    saveItemInStorage('user', token);
    history.push('/');
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Switch>
        <Route path="/" exact component={Home} />
        <PublicRoute path="/sign-in" component={() => <SignIn onLogin={handleLogin} />} />
        <PublicRoute path="/sign-up" component={() => <SignUp onLogin={handleLogin} />} />
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default withSettings(App);