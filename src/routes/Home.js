import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      users: [],
      groups: []
    }
  }

  async componentDidMount() {
    const postResponse = await
    fetch('http://localhost:8000/posts')
    const postJson = await postResponse.json()
    this.setState({posts: postJson})

    const userResponse = await
    fetch('http://localhost:8000/users')
    const userJson = await userResponse.json()
    this.setState({users: userJson})

    const groupResponse = await
    fetch('http://localhost:8000/groups')
    const groupJson = await groupResponse.json()
    this.setState({groups: groupJson})
  }

  render() {
    console.log(this.state.users[0]);
    return (
      <div>
        <Header />
        <div className="Home">
          <h2>Hello </h2>
        </div>
      </div>
    )
  }
}

export default Home;
