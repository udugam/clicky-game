import React, {Component} from 'react'
import {Image} from 'react-bootstrap'

class Card extends Component {
    state = {
        clicked: false
    }

    render(props) {
        return(
            <Image onClick={() => this.props.shuffleCards()} src={this.props.playingCard.imagePath} alt="playing Card" responsive/> 
        )
    }
}
export default Card