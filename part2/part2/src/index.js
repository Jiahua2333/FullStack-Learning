import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) =>{
    console.log(course.parts)
    return (
        <div>
            <Header name={course.name} />
            {course.parts.map(part => {
               return <Content key={part.id} part={part} />
            })}            
        </div>
    )
}

const Header = ({name}) =>  <h1>{name}</h1>

const Content = ({part}) => <p>{part.name}: {part.exercises}</p>

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return <Course course={course} />  
}

ReactDOM.render(<App />, document.getElementById('root'))