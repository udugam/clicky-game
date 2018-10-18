import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

class Card extends Component {
    state = {
        clicked: false
    }

    render(props) {
        return(
            <Image src={this.props.playingCard.imagePath} alt="playing Card" responsive/> 
        )
    }
}
export default Card