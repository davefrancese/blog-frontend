import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home'
import Signin from './Signin'
import AddPost from './AddPost'
import SinglePost from './SinglePost'
import YourGroups from './YourGroups'
import SingleGroup from './SingleGroup';
import Groups from './Groups'
import Users from './Users'

class index extends React.Component {
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
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/addpost' component={AddPost}/>
          <Route path='/singlepost' render={() => <SinglePost post={this.state.myPosts} />}/>
          <Route path='/yourgroups' render={() => <YourGroups groups={this.state.myGroups}/>} />
          <Route path='/singlegroup' render={() => <SingleGroup/>} />
          <Route path='/groups' component={Groups} />
          <Route path='/users' component={Users} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default index;

// export default () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path='/' component={Home}/>
//       <Route path='/signin' component={Signin}/>
//       <Route path='/addpost' component={AddPost}/>
//       <Route path='/singlepost' render={() => <SinglePost />}/>
//     </Switch>
//   </BrowserRouter>
// );
