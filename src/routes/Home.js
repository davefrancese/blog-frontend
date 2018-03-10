import React from 'react';
import {Link} from 'react-router-dom';
import Header from './Header'
import MyPostList from './MyPostList';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      allPosts: [],
      allUsers: [],
      allGroups: [],
      myPosts: [],
      myGroups: [],
      me: []
    }
  }

  async componentDidMount() {
    const postResponse = await
    fetch('http://localhost:8000/posts/200')
    const postJson = await postResponse.json()
    this.setState({myPosts: postJson})

    const userResponse = await
    fetch('http://localhost:8000/users/200')
    const userJson = await userResponse.json()
    this.setState({me: userJson})

    const groupResponse = await
    fetch('http://localhost:8000/groups')
    const groupJson = await groupResponse.json()
    this.setState({myGroups: groupJson})
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Home">
          <h2>Welcome, {this.state.me.map(i => i.username)}</h2>
          <div className="user-toolbar">
            <Link to='/addpost' className='Link'>
              <h4>Add Post</h4>
            </Link>
            <h4>Your Groups</h4>
            <h4>Unread Posts</h4>
          </div>
          <h3>Your Posts</h3>

          <MyPostList myPosts={this.state.myPosts}/>
        </div>
      </div>
    )
  }
}

export default Home;
