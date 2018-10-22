import React from 'react'

const Announcement = props=> {
    if(props.state.score===0 && props.state.highScore!==0) {
        return <small>Nice Try! Click on a card to Try Again.</small> 
    } else {
        return <small>Clicked on each image exactly once to win!</small>
    }
}

export default Announcement
