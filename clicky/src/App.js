import React, { Component } from 'react';
import './App.css';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import cardsList from './cards.json'
import Card from './Components/Card'
var d3 = require("d3-array")



class App extends Component {
  state = {
    cards: cardsList,
    score: 0,
    highScore: 0
  }

  shuffleCards(clickedCard) {
    //this code stores the array, updates the clickedCard, shuffles the entire array, and sets the new array in state
    let cards = this.state.cards
    cards = d3.shuffle(cards)
    this.setState(cards)
  } 

  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>
            The Clicky Game! <small>Click on each image exactly once to win!</small>
          </PageHeader>
        </Row>
        <Row>
          {this.state.cards.map(card=>(
            <Col xs={6} md={2} key={card.id}>
              <Card shuffleCards={()=>this.shuffleCards()} playingCard={card} />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default App;

