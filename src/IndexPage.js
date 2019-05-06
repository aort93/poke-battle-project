import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './App.css';


class IndexPage extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Poke-Battlegrounds!</h1>
        <button class="ui button" onClick={() => this.props.handlePages('p1')}>Play</button>
      </header>
    )
  }
}

export default IndexPage;
