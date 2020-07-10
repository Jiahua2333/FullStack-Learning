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

/* const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({text, counter}) => (
  <>
  <td>{text}</td> 
  <td>{counter}</td>
  </>
)


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
        <table>
          <tbody>
            <tr>
            <Statistics text='Good' counter={good} />
            </tr>

            <tr>
            <Statistics text='Neutral' counter={neutral} />
            </tr>

            <tr>
            <Statistics text='Bad' counter={bad} />
            </tr>

            <tr>
            <Statistics text='All' counter={All} />
            </tr>

            <tr>
            <Statistics text='Average' counter={average} />
            </tr>

            <tr>  
            <Statistics text='Positive' counter={positive} />
            </tr>  
          </tbody>
        </table>
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
) */

const Button = ({onclick, text}) => (
  <button onClick={onclick}>{text}</button>
)



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [totalVotes, setVotes] = useState([])
  const [mostVoted, setMostVoted] = useState(0)
  //setVotes([...votes])
  //const copy = [...votes]

  const showNextText = () =>{  
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const indexOfMax = (arr) =>{
    if (arr.length === 0) {
        return -1;
    }

    let max = arr[0];
    let maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
  }

  const voting = () =>{  
    //console.log(totalVotes.length)
    if(totalVotes.length === 0) {    
      const copy = [...votes]
      copy[parseInt(selected)]++
      setVotes([...copy])
      //console.log(totalVotes)
      let maxIndex = indexOfMax(copy);
      //setMostVoted(totalVotes.indexOf(Math.max(...totalVotes)))
      setMostVoted(maxIndex);
    }
    else {
      const copy = [...totalVotes]
      copy[parseInt(selected)]++
      setVotes([...copy])  
      let maxIndex = indexOfMax(copy);
      //setMostVoted(totalVotes.indexOf(Math.max(...totalVotes)))
      setMostVoted(maxIndex);
    }
    //console.log(totalVotes)
  }

  let displayVote
  if(totalVotes.length === 0) displayVote =  "It has 0 votes"
  else displayVote = `It has ${totalVotes[selected]} votes`

  let displayMostVote
  if(totalVotes.length === 0) displayMostVote =  "It has 0 votes"
  else displayMostVote = `It has ${totalVotes[mostVoted]} votes`

  return (
    
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>{displayVote}</p>
      <Button onclick={showNextText} text='Next anecdote' />
      <Button onclick={voting} text='Votes' /><br/>
      <h1>Anecdote of with most votes</h1> 
      <p>{props.anecdotes[mostVoted]}</p>
      <p>{displayMostVote}</p>
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

let votes = []
votes.length = anecdotes.length
votes.fill(0);

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)