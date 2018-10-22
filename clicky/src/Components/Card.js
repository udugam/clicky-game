import React from 'react'
import {Image} from 'react-bootstrap'

const Card = (props) => {
    return(
        <Image onClick={()=>props.handleClick(props.index)} src={props.playingCard.imagePath} alt="playing Card" responsive/> 
    )   
}
export default Card