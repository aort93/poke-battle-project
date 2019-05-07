import React from 'react';
import logo from './logo.svg';
import './App.css';
import IndexPage from './IndexPage'
import Player1Select from './Player1Select'
import Player2Select from './Player2Select'
import SelectContainer from './SelectContainer'
import Battlegrounds from './Battlegrounds'

class App extends React.Component {
  state = {
    page: "index",
    pokemons: [],
    team1: [],
    team2: []
  }

  componentDidMount () {
    fetch('http://localhost:3000/pokemons')
    .then( r => r.json())
    .then( pokeData => {
      this.setState({
        pokemons: pokeData
      })
    })
  }

  //clicke button for the start page
  handleStart = (pageStr) => {
    this.setState({
      page: pageStr
    })
  }

  ////Render our pgae depending on the state of the page on our click buttons
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
                handleRemoveFromTeam={this.handleRemoveFromTeam1}
               />
      case "p2":
        return <Player2Select
                pokemons={this.state.pokemons}
                handlePages={this.handleStart}
                team={this.state.team2}
                handleSelect={this.handleSelect}
                handleRemoveFromTeam={this.handleRemoveFromTeam2}
               />
      case "battle":
        return <Battlegrounds team1={this.state.team1} team2={this.state.team2} reset={this.resetGame}/>
      default:
        return null
    }
  }

  //Select pokemon from list and add them to their repsective user's team
  handleSelect = (poke, player) => {
    if ( !this.state.team1.includes(poke) && player === 'p1' && this.state.team1.length < 6) {
      this.setState({
        team1: [...this.state.team1, poke]
      })
    } else if (!this.state.team2.includes(poke) && player === 'p2' && this.state.team2.length < 6) {
      this.setState({
        team2: [...this.state.team2, poke]
      })
    }
  }

  //Filter all the pokemomn that was cliked on the POkemon team list
  handleRemoveFromTeam1 = (pokeObj) => {
    const removed = [...this.state.team1].filter(poke => {
      return poke.name !== pokeObj.name
    })
    this.setState ({
      team1: removed
    })
  }

  handleRemoveFromTeam2 = (pokeObj) => {
    const removed = [...this.state.team2].filter(poke => {
      return poke.name !== pokeObj.name
    })
    this.setState ({
      team2: removed
    })
  }


  //inital game logi which will be used to reset our code
  resetGame = () => {
    this.setState({
      page: "index",
      team1: [],
      team2: []
    })
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
