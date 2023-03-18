import React from 'react';
import Content from './Content';

const Course = ({courses}) => {
  return (
    <>
      <h1>Web Development Curriculum</h1>
      <Content courses={courses}/>
    </>
  )
}

export default Course