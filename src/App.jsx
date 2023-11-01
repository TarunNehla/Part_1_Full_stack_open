

const Header = () =>{
  const course = 'Half Stack application development'
  return <h1>{course}</h1>
}

const Body  = (props) =>{
  return <p>{props.part} {props.exercises}</p>
}

const Total = (props) =>{
  return <p>Number of exercises : {props.exercises[0]+props.exercises[1]+props.exercises[2]}</p>
}

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const exercises = [exercises1, exercises2, exercises3]
  return (
    <div>
      <Header/>
      <Body part = {part1} exercises = {exercises1} />
      <Body part = {part2} exercises = {exercises2} />
      <Body part = {part3} exercises = {exercises3} />
      <Total exercises = {exercises} />
    </div>
  )
}

export default App




