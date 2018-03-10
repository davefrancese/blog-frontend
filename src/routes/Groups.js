import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import GroupsList from './GroupsList'

class Groups extends React.Component {
  constructor() {
    super()
    this.state = {
      allGroups: []
    }
  }

  async componentDidMount() {
    const response = await
    fetch('http://localhost:8000/groups')
    const json = await response.json()
    this.setState({allGroups: json})
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Groups">
          <h3>Groups</h3>
          {this.state.allGroups.map(group =>
            <GroupsList
              key={group.id}
              group={group}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Groups;
