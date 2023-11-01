

const Header = () =>{
  const course = 'Half Stack application development'
  return <h1>{course}</h1>
}

const Part = (props) =>{
  return <p>{props.part} {props.exercises}</p>
}


const Body  = (props) =>{
  return (
    <>
      <Part part = {props.part[0]} exercises = {props.exercises[0]}/>
      <Part part = {props.part[1]} exercises = {props.exercises[1]}/>
      <Part part = {props.part[2]} exercises = {props.exercises[2]}/>
    </>
  )
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
  const parts = [part1, part2, part3]
  const exercises = [exercises1, exercises2, exercises3]
  return (
    <div>
      <Header/>
      <Body part = {parts} exercises = {exercises}/>
      <Total exercises = {exercises} />
    </div>
  )
}

export default App




