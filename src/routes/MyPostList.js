import React from 'react';
import {Link} from 'react-router-dom';
import MyPost from './MyPost';

class MyPostList extends React.Component {
  render() {
    return (
      <div className="MyPostList">
        {this.props.myPosts.map(post =>
            <MyPost
              key={post.id}
              post={post}
              />
          ) }
      </div>
    );
  }
}

export default MyPostList;
