

const Header = () =>{
  const course = 'Half Stack application development'
  return <h1>{course}</h1>
}

const Part = (props) =>{
  return <p>{props.pt} {props.ex}</p>
}


const Body  = (props) =>{
  return (
    <>
      <Part pt = {props.parts[0].name} ex = {props.parts[0].exercises}/>
      <Part pt = {props.parts[1].name} ex = {props.parts[1].exercises}/>
      <Part pt = {props.parts[2].name} ex = {props.parts[2].exercises}/>
    </>
  )
}

const Total = (props) =>{
  return <p>Number of exercises : {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
}

const App = () => {
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header/>
      <Body parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}

export default App




