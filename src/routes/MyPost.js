import React from 'react';
import {Link} from 'react-router-dom';
import SinglePost from './SinglePost';

class MyPost extends React.Component {

  render() {
    return (
      <div className="MyPost">
        <Link to={`/SinglePost/${this.props.post.id}`} className="Link">
          <h5><em>{this.props.post.title}</em></h5>
        </Link>
      </div>
    );
  }
}

export default MyPost;
