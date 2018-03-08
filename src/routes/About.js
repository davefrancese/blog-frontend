import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'

export default (props) => {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <Link to='/'>
      <p>Home</p>
      </Link>
    </div>
  )
}
