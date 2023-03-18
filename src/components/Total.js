import React from 'react'


const Total = ({course}) => {
  const parts = course.parts;
  const total = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises
  }, 0)
  return (
    <div>
        <p><b>Total number of exercises: {total}</b></p>
    </div>
  )
}

export default Total