import React from 'react';

function CourseDetails() {
  const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/20201' }
  ];

  return (
    <>
      {courses.length > 0 &&
        courses.map((course) => (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.date}</p>
          </div>
        ))}
    </>
  );
}

export default CourseDetails;
