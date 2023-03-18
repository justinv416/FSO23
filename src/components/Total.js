import React from 'react'


const Total = ({courses}) => {
  console.log(courses)
  const total = courses.parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises
  }, 0)
  return (
    <div>
        <p><b>Total number of exercises: {total}</b></p>
    </div>
  )
}

export default Total