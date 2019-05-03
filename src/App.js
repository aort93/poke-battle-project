import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './IndexPage'
import Player1Select from './Player1Select'
import Player2Select from './Player2Select'
import SelectContainer from './SelectContainer'

class App extends React.Component {
  state = {
    page: "index",
    pokemons: [],
    team1: [],
    team2: []
  }

  componentDidMount () {
    fetch('http://localhost:3090/pokemons')
    .then( r => r.json())
    .then( pokeData => {
      this.setState({
        pokemons: pokeData
      })
    })
  }

  handleStart = (pageStr) => {
    this.setState({
      page: pageStr
    })
  }

  renderPage = () => {
    switch (this.state.page){
      case "index":
        return <IndexPage handlePages={this.handleStart} />
      case "p1":
        return <Player1Select
                pokemons={this.state.pokemons}
                handlePages={this.handleStart}
                team={this.state.team1}
                handleSelect={this.handleSelect}
               />
      case "p2":
        return <Player2Select
                pokemons={this.state.pokemons}
                handlePages={this.handleStart}
                team={this.state.team2}
                handleSelect={this.handleSelect}
               />
      default:
        return null
    }
  }

  handleSelect = (poke, player) => {
    if (player === 'p1') {
      this.setState({
        team1: [...this.state.team1, poke]
      })
    } else if (player === 'p2') {
      this.setState({
        team2: [...this.state.team2, poke]
      })
    }
  }


  render() {
    return (
      <div className="App">
        {this.renderPage()}
      </div>
    )
  }

}

export default App;
