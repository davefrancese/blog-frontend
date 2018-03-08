import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'

export default (props) => {
  return (
    <div>
      <Header />
      <div className="Signin">
        <h2>Sign In</h2>
      </div>
    </div>
  )
}
