import React from 'react'
import {Image} from 'react-bootstrap'

const Card = (props) => {
    return(
        <Image onClick={() => props.shuffleCards(props.playingCard)} src={props.playingCard.imagePath} alt="playing Card" responsive/> 
    )
    
}
export default Card