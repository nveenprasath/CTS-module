import React from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="section course">
        <h1>Course Details</h1>
        <CourseDetails />
      </div>

      <div className="vertical-line"></div>

      <div className="section book">
        <h1>Book Details</h1>
        <BookDetails />
      </div>

      <div className="vertical-line"></div>

      <div className="section blog">
        <h1>Blog Details</h1>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;