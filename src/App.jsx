

const Header = (props) =>{
  return <h1>{props.course.name}</h1>
}

const Part = (props) =>{
  return <p>{props.pt} {props.ex}</p>
}


const Body  = (props) =>{
  return (
    <>
      <Part pt = {props.course.parts[0].name} ex = {props.course.parts[0].exercises}/>
      <Part pt = {props.course.parts[1].name} ex = {props.course.parts[1].exercises}/>
      <Part pt = {props.course.parts[2].name} ex = {props.course.parts[2].exercises}/>
    </>
  )
}

const Total = (props) =>{
  return <p>Number of exercises : {props.course.parts[0].exercises+props.course.parts[1].exercises+props.course.parts[2].exercises}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }
  return (
    <div>
      <Header course = {course} />
      <Body course = {course}/>
      <Total course = {course} />
    </div>
  )
}

export default App




