import React, {useState} from 'react'

const Statistics = (props) => {
    return (
        <div>
            {props.text} {props.counter}
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [clicks, setClicks] = useState({good: 0, bad: 0, neutral: 0,})
    const [allClicks, setAll] = useState([])

    const handleGoodClick = () => {
        const newClicks = {
            good: clicks.good + 1,
            bad: clicks.bad,
            neutral: clicks.neutral,
        }
        setAll(allClicks.concat(1))
        setClicks(newClicks)
    }
    const handleBadClick = () => {
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad + 1,
            neutral: clicks.neutral,
        }
        setAll(allClicks.concat(1))
        setClicks(newClicks)
    }
    const handleNeutralClick = () => {
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad,
            neutral: clicks.neutral + 1,
        }
        setAll(allClicks.concat(1))
        setClicks(newClicks)
    }

    if (allClicks.length > 0) {
        return (
            <div>
                <h1>Give Feedback</h1>
                <Button handleClick={handleGoodClick} text={'good'}/>
                <Button handleClick={handleNeutralClick} text={'neutral'}/>
                <Button handleClick={handleBadClick} text={'bad'}/>
                <h1>Statistics</h1>
                <Statistics text={'good'} counter={clicks.good}/>
                <Statistics text={'neutral'} counter={clicks.neutral}/>
                <Statistics text={'bad'} counter={clicks.bad}/>
                <Statistics text={'all'} counter={allClicks.length}/>
                <Statistics text={'average'} counter={(clicks.good - clicks.bad) / allClicks.length}/>
                <Statistics text={'positive'} counter={100 * clicks.good / allClicks.length + '%'}/>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Give Feedback</h1>
                <Button onClick={handleGoodClick} text={'good'}/>
                <Button onClick={handleNeutralClick} text={'neutral'}/>
                <Button onClick={handleBadClick} text={'bad'}/>
                <h1>Statistics</h1>
                <div>No feedback given</div>
            </div>
        )
    }
}

export default App