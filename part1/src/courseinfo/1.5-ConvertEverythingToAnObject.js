import React from 'react'

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
            <h1>{course.name}</h1>
            {course.parts.map(part => <p>{part.name} {part.exercises}</p>)}
            <h3>
                Number of exercises = {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
            </h3>
        </div>
    )
}
export default App