import React, { Component } from 'react';
import './App.css';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import cardsList from './cards.json'
import Card from './Components/Card'
var d3 = require("d3-array")



class App extends Component {
  state = {
    cards: cardsList
  }

  shuffleCards() {
    console.log("shuffling the cards")
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

