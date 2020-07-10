//import React from 'react'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Header = (props) => {
//   return <h1>{props.course}</h1>;
// }

// const Content = (props) => {
//   //console.log(props)
//   return (
//     <div>
//       <Part part={props.parts[0]}  />
//       <Part part={props.parts[1]}  />
//       <Part part={props.parts[2]}  />
//     </div>
//   )  
// }

// const Part = (props) => { 
//   return  <p>{props.part.name}  {props.part.exercises}</p>
// }

// const Total = (props) => {
//   return <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
// }


// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts}  />
//       <Total parts={parts} />
//     </div>
//   )
// }

/* const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root')) */


/* const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />     
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />           
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
) */

/* const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left' />
        <Button onClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
} */

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({text, counter}) => <p>{text}: {counter}</p>


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [All, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(All + 1)
    setAverage((parseInt(good+1)-parseInt(bad))/parseInt(All+1))
    setPositive(parseInt(good+1)/parseInt(All+1))
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(All + 1)
    setAverage((parseInt(good)-parseInt(bad))/parseInt(All+1))
    setPositive(parseInt(good)/parseInt(All+1))
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(All + 1)
    setAverage((parseInt(good)-parseInt(bad+1))/parseInt(All+1))
    setPositive(parseInt(good)/parseInt(All+1))
  }
  let displayStatistics
  if(parseInt(bad) !== 0 || parseInt(good) !== 0 || parseInt(neutral) !== 0){
    displayStatistics = (
      <>
      <Statistics text='Good' counter={good} />
      <Statistics text='Neutral' counter={neutral} />
      <Statistics text='Bad' counter={bad} />
      <Statistics text='All' counter={All} />
      <Statistics text='Average' counter={average} />
      <Statistics text='Positive' counter={positive} />
      </>
    )
  }
  else displayStatistics = <p>No feedback given</p>

  
  return (
    <div>
      <h1> Give Feedback </h1>
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />
      <h1> Statistics </h1>
      {displayStatistics}
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)