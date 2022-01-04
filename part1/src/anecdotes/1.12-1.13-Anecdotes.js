import React, { useState } from 'react'

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const App = () => {
    const points = Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0);
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(points)
    const [mostVoted, setMostVoted] = useState(0)

    const chooseRandom = () => {
       const random = Math.round(Math.random() * 6);
       setSelected(random);
    }

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const voteCount = () => {
        const points = [...votes];
        points[selected] += 1;
        const mostVotes = points.indexOf(Math.max(...points));
        setVotes(points)
        setMostVoted(mostVotes);
        return votes;
    }

    return (
        <div>
            <h2>Anecdote of the Day</h2>
            {anecdotes[selected]}
            <br/>
            <p>has {votes[selected]} votes </p>
            <Button handleClick={voteCount} text={"vote"}/>
            <Button handleClick={chooseRandom} text={"next anecdote"}/>
            <br/>
            <h2>Anecdote with the most votes</h2>
            <p>{anecdotes[mostVoted]}</p>
            <div>has {votes[mostVoted]} votes</div>
        </div>
    )
}

export default App