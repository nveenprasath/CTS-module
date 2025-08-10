import React from 'react';

function BlogDetails() {
  const hasBlogs = true;

  return hasBlogs ? (
    <>
      <h2>React Learning</h2>
      <strong>Stephen Biz</strong>
      <p>Welcome to learning React!</p>

      <h2>Installation</h2>
      <strong>Schwezdneier</strong>
      <p>You can install React from npm.</p>
    </>
  ) : (
    <p>No blogs available</p>
  );
}

export default BlogDetails;
