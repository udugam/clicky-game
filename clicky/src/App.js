import React, { Component } from 'react';
import './App.css';
import {PageHeader} from 'react-bootstrap'



class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>
          The Clicky Game! <small>Click on each image exactly once to win!</small>
        </PageHeader>

      </div>
    );
  }
}

export default App;
