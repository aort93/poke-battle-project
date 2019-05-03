import React from 'react'
import './canvas.css';
import MoveContainer from './MoveContainer'



class Battlegrounds extends React.Component {

  state = {
    //if true display player1
    toggle: true,
    team1pokemonHP: 100,
    team2pokemonHP: 100,
  }

  handleClick = () => {
    if (this.state.toggle) {
      this.setState((prevState) => ({
        team2pokemonHP: prevState.team2pokemonHP - this.props.team1[0].move.damage
      }))
    } else {
      this.setState((prevState) => ({
        team1pokemonHP: prevState.team1pokemonHP - this.props.team2[0].move.damage
      }))
    }
    this.setState((prevState) => ({
      toggle: !prevState.toggle
    }))
  }

  render() {
    return (
      <div className='supercontainer'>
        <h1>Time to Battle</h1>
        <img className='team1' src={this.props.team1[0].frontURL} />
        <img className='team2' src={this.props.team2[0].backURL} />
        <MoveContainer
          team1={this.props.team1}
          team2={this.props.team2}
          toggle={this.state.toggle}
          handleClick={this.handleClick}
          team1pokemonHP={this.state.team1pokemonHP}
          team2pokemonHP={this.state.team2pokemonHP}
        />
      </div>
    )
  }
}

export default Battlegrounds
