import React, { Component } from 'react';
import './App.css';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import cardsList from './cards.json'
import Card from './Components/Card'
import Announcement from  './Components/Announcement'
import ScoreBoard from './Components/ScoreBoard'
var d3 = require("d3-array")

class App extends Component {
  state = {
    cards: cardsList,
    score: 0,
    highScore: 0
  }

  //This function checks if the clicked Card has been clicked before
  checkClick = (clickedCardID,cards) => {
    if(cards[clickedCardID].clicked === true) {
      return true
    } else {
      cards[clickedCardID].clicked = true
      return false
    }
  }

  checkHighScore = (score) => {
    if(score>this.state.highScore) {
      return true
    } else {
      return false
    }
  }

  resetClicks = (cards) => {
    cards.forEach(function(card) {
      card.clicked=false
    })
  }

  //This function uses a Fisher-Yates shuffling algorithm
  shuffleCards = cards => {
    cards = d3.shuffle(cards)
  }

  handleClick = clickedCardID => {
    let {cards, score, highScore} = this.state

    //check to see if the card has been clicked before, increment score if not, reset if yes
    if(this.checkClick(clickedCardID,cards)===true) {
      if(this.checkHighScore(score)) {
        highScore = score
      }
      this.resetClicks(cards)
      score=0
    } else {
      score++  
    } 
    
    //shuffle cards before setting state
    this.shuffleCards(cards)

    //this code stores the array, updates the clickedCard, shuffles the entire array, and sets the new array in state
    this.setState({cards, score, highScore})
  } 

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>
            The Clicky Game! <Announcement state={this.state}/> <ScoreBoard state={this.state}/>
          </PageHeader>
        </Row>
        <Row>
          {this.state.cards.map((card,index)=>(
            <Col xs={6} md={2} key={card.id}>
              <Card handleClick={this.handleClick} index={index} playingCard={card} />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default App;

