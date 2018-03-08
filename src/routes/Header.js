import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

export default () => (
  <div className="Header">
    <h1>Blog</h1>
    <ul className="navigation">
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/signin'>
        <li>Sign In</li>
      </Link>
    </ul>

  </div>
)
