import React from 'react';
import {Link} from 'react-router-dom';

class MyGroupsList extends React.Component {

  render() {
    return (
      <div className="MyGroupsList">
        <Link to={`/SingleGroup/${this.props.group.id}`}>
          <p>{this.props.group.name}</p>
        </Link>
      </div>
    );
  }
}

export default MyGroupsList;
