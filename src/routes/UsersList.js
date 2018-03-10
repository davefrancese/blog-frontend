import React from 'react';
import {Link} from 'react-router-dom';


class MyPostList extends React.Component {
  render() {
    return (
      <div className="UsersList">
        <Link to={`/user/${this.props.user.id}`} className="Link">
          <p>{this.props.user.username}</p>
        </Link>
      </div>
    );
  }
}

export default MyPostList;
