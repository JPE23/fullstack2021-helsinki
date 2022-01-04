import React, {useState} from 'react'

const App = () => {

    const [clicks, setClicks] = useState({
        good: 0,
        bad: 0,
        neutral: 0,
        all: 0
    })

    const handleGoodClick = () => {
        const newClicks = {
            good: clicks.good + 1,
            bad: clicks.bad,
            neutral: clicks.neutral,
            all: clicks.all + 1
        }
        setClicks(newClicks)
    }
    const handleBadClick = () => {
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad + 1,
            neutral: clicks.neutral,
            all: clicks.all + 1
        }
        setClicks(newClicks)
    }
    const handleNeutralClick = () => {
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad,
            neutral: clicks.neutral + 1,
            all: clicks.all + 1
        }
        setClicks(newClicks)
    }

    const Display = ({counter, text}) => <div>{text} {counter}</div>
    const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>


    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={handleGoodClick} text={'good'}/>
            <Button onClick={handleNeutralClick} text={'neutral'}/>
            <Button onClick={handleBadClick} text={'bad'}/>

            <h1>Statistics</h1>
            <Display text={'good'} counter={clicks.good}/>
            <Display text={'neutral'} counter={clicks.neutral}/>
            <Display text={'bad'} counter={clicks.bad}/>
            <Display text={'all'} counter={clicks.all}/>
            <Display text={'average'} counter={(clicks.good - clicks.bad) / clicks.all}/>
            <Display text={'positive'} counter={100 * clicks.good / clicks.all + '%'}/>
        </div>
    )
}

export default App