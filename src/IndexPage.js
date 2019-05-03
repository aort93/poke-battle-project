import React, { Fragments, Component } from 'react';
import './App.css';


class IndexPage extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Poke-Battlegrounds!</h1>
        <button onClick={() => this.props.handlePages('p1')}>Start</button>
      </header>
    )
  }
}

export default IndexPage;
