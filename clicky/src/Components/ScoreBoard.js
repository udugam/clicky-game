import React from 'react'

const ScoreBoard = props=> (
    <div>
        <h1>Score: {props.state.score}</h1>
        <h1>HighScore: {props.state.highScore}</h1>
    </div>
)

export default ScoreBoard