import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Profile from './pages/Profile';
import StartMenu from './pages/StartMenu';
import AppBar from './components/AppBar';
import { AuthProvider } from './auth/AuthContext';
import { PrivateRouter } from './auth/PrivateRouter';
import Advice from './pages/Advice'
import Diet from './pages/Diet';
import { Users } from './pages/Users';
//import diet from "./components/diet/AddDietModal";

ReactDOM.render(
   <AuthProvider>
      <BrowserRouter>
      <AppBar/>
      <Switch>
        <Route path="/login" exact= {true} component={Login}/>
        <PrivateRouter path="/" exact= {true} component={StartMenu}/>
        <Route path="/register" exact= {true} component={Register}/>
        <Route path="/forgot_password" exact= {true} component={ForgotPassword}/>
        <Route path="/Profile" exact= {true} component={Profile}/>
        <PrivateRouter path="/Advice" exact= {true} component={Advice}/>
        <PrivateRouter path="/diet" exact={true} component={Diet}/>
        <PrivateRouter path="/users" exact={true} component={Users}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </BrowserRouter>
   </AuthProvider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
