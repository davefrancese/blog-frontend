import React from 'react';
import {Link} from 'react-router-dom';

class GroupsList extends React.Component {

  render() {
    return (
      <div className="GroupsList">
        <Link to={`/SingleGroup/${this.props.group.id}`}>
          <p>{this.props.group.name}</p>
        </Link>
      </div>
    );
  }
}

export default GroupsList;
