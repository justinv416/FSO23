import React from 'react'

const Part = (props) => {
   return (
    <p>{props.name} {props.exercise}</p>
   )
} 

const Content = ({course}) => {
  console.log(course.parts[0].exercises)
    return (
    <div>
      <Part name={course.parts[0].name} exercise={course.parts[0].exercises}/>
      <Part name={course.parts[1].name} exercise={course.parts[1].exercises}/>
      <Part name={course.parts[2].name} exercise={course.parts[2].exercises}/>
    </div>
  )
}

export default Content