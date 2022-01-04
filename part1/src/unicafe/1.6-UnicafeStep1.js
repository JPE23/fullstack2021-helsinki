import React, {useState} from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const addOneGood = () => setGood(good + 1)
    const addOneNeutral = () => setNeutral(neutral + 1)
    const addOneBad = () => setBad(bad + 1)

    const Display = ({ counter, text}) => <div>{text} {counter}</div>
    const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={addOneGood} text={'good'}/>
            <Button onClick={addOneNeutral} text={'neutral'}/>
            <Button onClick={addOneBad} text={'bad'}/>

            <h1>Statistics</h1>
            <Display text={'good'} counter={good} />
            <Display text={'neutral'} counter={neutral} />
            <Display text={'bad'} counter={bad} />
        </div>
    )
}

export default App