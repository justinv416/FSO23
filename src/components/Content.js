import React from 'react'

const Part = (props) => {
   return (
    <p>{props.name} {props.exercise}</p>
   )
} 

const Content = ({part1, part2, part3, exercises1, exercises2, exercises3}) => {
  return (
    <div>
      <Part name={part1} exercise={exercises1}/>
      <Part name={part2} exercise={exercises2}/>
      <Part name={part3} exercise={exercises3}/>
    </div>
  )
}

export default Content