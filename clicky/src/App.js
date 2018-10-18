import React, { Component } from 'react';
import './App.css';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import cardsList from './cards.json'
import Card from './Components/Card'



class App extends Component {
  state = {
    cards: cardsList
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
            <Col xs={6} md={2}>
              <Card playingCard={card} />
            </Col>
          ))}
        </Row>
      </Grid>
    );
  }
}

export default App;

