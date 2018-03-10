import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Signin from './Signin'
import AddPost from './AddPost'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/signin' component={Signin}/>
      <Route path='/addpost' component={AddPost}/>

    </Switch>
  </BrowserRouter>
);
