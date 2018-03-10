import React from 'react';
import Header from './Header'
import {Link} from 'react-router-dom';

class SinglePost extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="SinglePost">
          <h5>{this.props.post.map(i => i.title)}</h5>
          <p>{this.props.post.map(i => i.content)}</p>
        </div>
      </div>
    );
  }
}

export default SinglePost;
