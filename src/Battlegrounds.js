import React from 'react'
import './canvas.css';
import MoveContainer from './MoveContainer'
import WinnerPage from './WinnerPage'



class Battlegrounds extends React.Component {

  state = {
    //if true display player1
    toggle: true,
    team1pokemonHP: 100,
    team2pokemonHP: 100,
    team1Idx: 0,
    team2Idx: 0,
    winner1: false,
    winner2: false
  }

  handleClick = (index) => {
    let hpAfterDmg1 = this.state.team1pokemonHP - this.props.team2[this.state.team2Idx].moves[index].damage
    let hpAfterDmg2 = this.state.team2pokemonHP - this.props.team1[this.state.team1Idx].moves[index].damage
    let nextIdx1 = this.state.team1Idx + 1
    let nextIdx2 = this.state.team2Idx + 1

    console.log(hpAfterDmg1)

    if (this.state.team1Idx < 6 && this.state.team2Idx < 6) {
      if ( this.state.toggle ) { //when its trainer 1
        if ( hpAfterDmg2 <= 0) {
          if (this.state.team2Idx < 5) {
            this.setState((prevState) => ({
              team2pokemonHP: 100,
              team2Idx: prevState.team2Idx + 1,
              toggle: !prevState.toggle
            }))
          } else {
            this.setState((prevState) => ({
              winner1: !prevState.winner1
            }))
          }
        } else {
          this.setState((prevState) => ({
              team2pokemonHP: prevState.team2pokemonHP - this.props.team1[this.state.team1Idx].moves[index].damage,
              toggle: !prevState.toggle
          }))
        }
      } else { //when its trainer 2
        if ( hpAfterDmg1 <= 0) {
          if( this.state.team1Idx < 5) {
            this.setState((prevState) => ({
              team1pokemonHP: 100,
              team1Idx: prevState.team1Idx + 1,
              toggle: !prevState.toggle
            }))
          } else {
            this.setState((prevState) => ({
              winner2: !prevState.winner2
            }))
          }
        } else {
          this.setState((prevState) => ({
              team1pokemonHP: prevState.team1pokemonHP - this.props.team2[this.state.team2Idx].moves[index].damage,
              toggle: !prevState.toggle
          }))
        }
      }
    } else {
      console.log('done')
    }



    if (this.state.team1Idx === 6 && this.state.team2Idx !== 6) {
      this.setState((prevState) => ({
        winner2: !prevState.winner2
      }))
    } else if (this.state.team1Idx !== 6 && this.state.team2Idx === 6) {
      this.setState((prevState) => ({
        winner2: !prevState.winner1
      }))
    }

  }

  battlegroundsStateReset = () => {
    this.setState({
      toggle: true,
      team1pokemonHP: 100,
      team2pokemonHP: 100,
      team1Idx: 0,
      team2Idx: 0,
      winner1: false,
      winner2: false
    })
  }

  render() {
    return (
      (this.state.winner2 || this.state.winner1) ?
      <div>
        <WinnerPage
          winner1={this.state.winner1}
          winner2={this.state.winner2}
          reset={this.props.reset}
          battlegroundsStateReset={this.battlegroundsStateReset}
          team1={this.props.team1}
          team2={this.props.team2}
        />
      </div>
      :
        <div className='supercontainer'>
          <h1>Time to Battle</h1>
          <img className='team1' src={this.props.team1[this.state.team1Idx].frontURL} />
          <img className='team2' src={this.props.team2[this.state.team2Idx].backURL} />
          <MoveContainer
            team1={this.props.team1}
            team2={this.props.team2}
            toggle={this.state.toggle}
            team1Idx={this.state.team1Idx}
            team2Idx={this.state.team2Idx}
            handleClick={this.handleClick}
            team1pokemonHP={this.state.team1pokemonHP}
            team2pokemonHP={this.state.team2pokemonHP}
          />
        </div>
    )
  }

}

export default Battlegrounds
