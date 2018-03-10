import React from 'react';
import Header from './Header'
import MyGroupsList from './MyGroupsList';
import {Link} from 'react-router-dom';

class YourGroups extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="YourGroups">
          <h3>Your groups</h3>
          {this.props.groups.map(group =>
            <MyGroupsList
              key={group.id}
              group={group}
            />
          )}
        </div>
      </div>
    );
  }
}

export default YourGroups;
