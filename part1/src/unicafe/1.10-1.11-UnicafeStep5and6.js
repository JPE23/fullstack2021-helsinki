import React, {useState} from 'react'

const StatisticLine = (props) => {
    return (
        <tbody>
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
        </tbody>
    )
}

const Statistics = props => {
    const all = props.good + props.bad + props.neutral;
    return (
        <div>
            <table>
                <StatisticLine text='good' value={props.good}/>
                <StatisticLine text='neutral' value={props.neutral}/>
                <StatisticLine text='bad' value={props.bad}/>
                <StatisticLine text='all' value={all}/>
                <StatisticLine text='average' value={props.good - props.bad / all}/>
                <StatisticLine text='positive' value={100 * props.good / all + '%'}/>
            </table>
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = () => {
    const [clicks, setClicks] = useState({good: 0, bad: 0, neutral: 0})
    const [allClicks, setAll] = useState([])

    const handleGoodClick = () => {
        const newClicks = {
            good: clicks.good + 1,
            bad: clicks.bad,
            neutral: clicks.neutral,
        }
        setAll(allClicks.concat(1))
        setClicks(newClicks)
        return newClicks;
    }
    const handleBadClick = () => {
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad + 1,
            neutral: clicks.neutral,
        }
        setAll(allClicks.concat(1))
        setClicks(newClicks)
        return newClicks;
    }
    const handleNeutralClick = () => {
        const newClicks = {
            good: clicks.good,
            bad: clicks.bad,
            neutral: clicks.neutral + 1,
        }
        setAll(allClicks.concat(1))
        setClicks(newClicks)
        return newClicks;
    }

    if (allClicks.length > 0) {
        return (
            <div>
                <h1>Give Feedback</h1>
                <Button handleClick={handleGoodClick} text={'good'}/>
                <Button handleClick={handleNeutralClick} text={'neutral'}/>
                <Button handleClick={handleBadClick} text={'bad'}/>
                <h1>Statistics</h1>
                <Statistics
                    good={clicks.good}
                    bad={clicks.bad}
                    neutral={clicks.neutral}
                />
            </div>
        )
    }
    return (
        <div>
            <h1>Give Feedback</h1>
            <Button handleClick={handleGoodClick} text={'good'}/>
            <Button handleClick={handleNeutralClick} text={'neutral'}/>
            <Button handleClick={handleBadClick} text={'bad'}/>
            <h1>Statistics</h1>
            <div>No feedback given</div>
        </div>
    )
}

export default App