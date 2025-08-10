import React from 'react';
class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  }
}
export default Post;