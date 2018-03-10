import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import UsersList from './UsersList'

class Users extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  async componentDidMount() {
    const response = await
    fetch('http://localhost:8000/users')
    const json = await response.json()
    this.setState({users: json})
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Users">
          <h3>Users</h3>
          {this.state.users.map(user =>
            <UsersList
              key={user.id}
              user={user} />
          )}
        </div>
      </div>
    );
  }
}

export default Users;
