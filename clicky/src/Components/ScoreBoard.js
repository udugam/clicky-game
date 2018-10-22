import React from 'react'

const ScoreBoard = props=> (
    <div>
        <span style={styles.score}>Score: {props.state.score}</span>
        <span style={styles.highScore}>HighScore: {props.state.highScore}</span>
    </div>
)

const styles= {
    score: {
        fontSize:'30px'
    },
    highScore: {
        color:'blue',
        float:'right'
    }
}

export default ScoreBoard