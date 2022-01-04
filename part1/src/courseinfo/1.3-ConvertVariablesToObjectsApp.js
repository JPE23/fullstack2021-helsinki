import React from 'react'

const App = () => {

    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }

    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }

    const part3 = {
        name: 'State of a component',
        exercises: 14
    }

    const Header = (props) => {
        return (
        <h1>{props.course}</h1>
        )
    }

    const Content = () => {
        return (
            <div>
                <Part name={part1.name} exercises={part1.exercises}/>
                <Part name={part2.name}exercises={part2.exercises}/>
                <Part name={part3.name} exercises={part2.exercises}/>
            </div>
        )
    }
    const Total = (props) => {
        return (
            <p>
                Number of exercises = {props.total}
            </p>
        )
    }

    const Part = (props) => {
        return (
            <div>
                {props.name}, {props.exercises}
            </div>
        )
    }

    return (
        <div>
            <Header course={course}/>
            <Content/>
            <Total total={part1.exercises + part2.exercises + part3.exercises}/>
        </div>
    )
}

export default App