import React from 'react';

class MyPost extends React.Component {

  render() {
    return (
      <div className="MyPost">
          <h5><em>{this.props.post.title}</em></h5>
      </div>
    );
  }
}

export default MyPost;
