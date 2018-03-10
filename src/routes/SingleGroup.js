import React from 'react';
import Header from './Header'
import {Link} from 'react-router-dom';

class SingleGroup extends React.Component {
  constructor() {
    super()
    this.state = {
      groupPosts: []
    }
  }

  async componentDidMount() {
    const postResponse = await
    fetch('http://localhost:8000/posts/groups/100')
    const postJson = await postResponse.json()
    this.setState({groupPosts: postJson})
  }

  render() {
    return (
      <div>
        <Header />
        <div className="SingleGroup">
          <h3>{this.state.groupPosts.map(i => i.title)}</h3>
          <p>{this.state.groupPosts.map(i => i.content)}</p>
        </div>
      </div>
    );
  }
}

export default SingleGroup;
