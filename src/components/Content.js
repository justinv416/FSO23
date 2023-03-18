import React from 'react'
import Part from './Part'
import Header from './Header'
import Total from './Total'

const Content = ({courses}) => {
  console.log(courses)
    return (
      <>
        {courses.map((course) => {
          return (
            <>
              <Header name={course.name}/>
              {course.parts.map((part) => <Part name={part.name} exercise={part.exercises}/>)}
              <Total courses={course} />            
            </>
          )
        })}
      </>
  )
}

export default Content