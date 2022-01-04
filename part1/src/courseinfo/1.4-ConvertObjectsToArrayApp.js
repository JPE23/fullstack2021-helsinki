import React from 'react'

const App = () => {

    const course = 'Half Stack application development'
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

    const Header = (props) => {
        return (
            <h1>{props.course}</h1>
        )
    }

    const Content = () => {
        return (
            <div>
                <Part/>
            </div>
        )
    }

    const Total = () => {
        return (
            <p>
                Number of exercises = {parts[0].exercises + parts[1].exercises + parts[2].exercises}
            </p>
        )
    }

    const Part = () => {
        return (
            <div>
                {parts.map(part => <p>{part.name} {part.exercises}</p>)}
            </div>
        )
    }

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total total={parts}/>
        </div>
    )
}

export default App