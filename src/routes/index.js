import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Signin from './Signin'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => <Home {...props} />}/>
      <Route path='/home' component={Home}/>
      <Route path='/signin' component={Signin}/>
    </Switch>
  </BrowserRouter>
);