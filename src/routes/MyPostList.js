import React from 'react';
import {Link} from 'react-router-dom';
import MyPost from './MyPost';

class MyPostList extends React.Component {
  render() {
    return (
      <div className="MyPostList">
        {this.props.myPosts.map(post =>
          <Link to="" className="Link">
            <MyPost
              key={post.id}
              post={post}
              />
          </Link>
          ) }

      </div>
    );
  }
}

export default MyPostList;
