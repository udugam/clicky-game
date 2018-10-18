import React, { Component } from 'react';
import './App.css';
import {PageHeader, Grid, Row, Col} from 'react-bootstrap'
import cards from './cards.json'
import Card from './Components/Card'



class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <PageHeader>
            The Clicky Game! <small>Click on each image exactly once to win!</small>
          </PageHeader>
        </Row>
        <Row>
          {cards.map(card=>(
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

