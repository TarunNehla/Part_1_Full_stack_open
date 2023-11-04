import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}>{text}</button>
  )
}

const StatisticsLine = ({text, value}) => {
  return (
    <p>{text} : {value}</p>
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <StatisticsLine text = 'good' value = {good}/>
      <StatisticsLine text = 'neutral' value = {neutral}/>
      <StatisticsLine text = 'bad' value = {bad}/>
      <StatisticsLine text = 'all' value = {total}/>
      <StatisticsLine text = 'avergae' value = {(good-bad)/total}/>
      <StatisticsLine text = 'positive' value = {good/total*100}/>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total , setTotal] = useState(0)

  const handleGood = () => {
    setGood(good+1)
    setTotal(total+1)
  }
  const handleNeutral = () => {
    setTotal(total+1)
    setNeutral(neutral+1)
  }
  const handleBad = () => {
    setBad(bad+1)
    setTotal(total+1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} text = 'Good'/>
      <Button handleClick={handleNeutral} text = 'Neutral'/>
      <Button handleClick={handleBad} text = 'Bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total}/> 
    </div>
  )
}

export default App