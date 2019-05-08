import React from 'react'
import './canvas.css';
import MoveContainer from './MoveContainer'
import WinnerPage from './WinnerPage'
import { Button, Progress } from "semantic-ui-react";
import { Form, Grid, Image, Transition } from 'semantic-ui-react'
import multiplier from './Multiplier'

class Battlegrounds extends React.Component {
  constructor() {
    super()
    this.audio = new Audio("battle.mp3")
    this.state = {
      //if true display player1
      toggle: true,
      team1pokemonHP: 100,
      team2pokemonHP: 100,
      team1Idx: 0,
      team2Idx: 0,
      winner1: false,
      winner2: false,
      visible: true,
      visible1: true
    }
  }

  componentDidMount() {
    this.audio.play()
  }


  damageMultiplier = (attackType, attackDmg, pokeType, pokeHp) => {
    let newHp;
      console.log('attack type', attackType);
      console.log('attackDmg:',attackDmg)
      console.log('opp type', pokeType)
      console.log('weakness', multiplier[pokeType].weakness)
      console.log('resistance',multiplier[pokeType].resistance)

    if (multiplier[pokeType].weakness.includes(attackType)) {
      console.log(1.5 * attackDmg);
      newHp = pokeHp - (1.5 * attackDmg)
      return newHp
    } else if (multiplier[pokeType].resistance.includes(attackType)) {
      console.log(.5 * attackDmg);
      return newHp = pokeHp - (.5 * attackDmg)
      return newHp
    } else {
      newHp = pokeHp - attackDmg
      return newHp
    }
  }



  handleClick = (index, audio, audio2) => {
    let hpAfterDmg1 = this.state.team1pokemonHP - this.props.team2[this.state.team2Idx].moves[index].damage
    let hpAfterDmg2 = this.state.team2pokemonHP - this.props.team1[this.state.team1Idx].moves[index].damage
    let nextIdx1 = this.state.team1Idx + 1
    let nextIdx2 = this.state.team2Idx + 1


      if ( this.state.toggle ) { //when its trainer 1
        let attackType = this.props.team1[this.state.team1Idx].moves[index].move_type
        let attackDmg = this.props.team1[this.state.team1Idx].moves[index].damage
        let pokeHp = this.state.team2pokemonHP
        let pokeType = this.props.team2[this.state.team2Idx].type_name
        let hpAfterDmg2 = this.damageMultiplier(attackType, attackDmg, pokeType, pokeHp)

        if ( hpAfterDmg2 <= 0) {
          if (this.state.team2Idx < 5) {
            audio2.play()
            this.setState((prevState) => ({
              team2pokemonHP: 100,
              team2Idx: prevState.team2Idx + 1,
              toggle: !prevState.toggle
            }))
          } else {
            this.setState((prevState) => ({
              winner1: !prevState.winner1
            }), () => {
              this.audio.pause()
              this.audio.currentTime = 0;
            })

          }
        } else {
          this.toggleVisibility1()
          audio.play()
          this.setState((prevState) => ({
              team2pokemonHP: hpAfterDmg2,
              toggle: !prevState.toggle
          }))
        }
      } else { //when its trainer 2
        let attackType = this.props.team2[this.state.team2Idx].moves[index].move_type
        let attackDmg = this.props.team2[this.state.team2Idx].moves[index].damage
        let pokeHp = this.state.team1pokemonHP
        let pokeType = this.props.team1[this.state.team1Idx].type_name
        let hpAfterDmg1 = this.damageMultiplier(attackType, attackDmg, pokeType, pokeHp)

        if ( hpAfterDmg1 <= 0) {
          if( this.state.team1Idx < 5) {
            audio2.play()
            this.setState((prevState) => ({
              team1pokemonHP: 100,
              team1Idx: prevState.team1Idx + 1,
              toggle: !prevState.toggle
            }))
          } else {
            this.setState((prevState) => ({
              winner2: !prevState.winner2
            }), () => {
              this.audio.pause()
              this.audio.currentTime = 0;
            })
          }
        } else {
          this.toggleVisibility()
          audio.play()
          this.setState((prevState) => ({
              team1pokemonHP: hpAfterDmg1 ,
              toggle: !prevState.toggle
          }))
        }
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

  toggleVisibility = () =>
    this.setState(prevState => ({ visible: !prevState.visible }));

  toggleVisibility1 = () =>
    this.setState(prevState => ({ visible1: !prevState.visible1 }));


  render() {
    const audio = new Audio("hit.mp3")
    const audio2 = new Audio("new.mp3")

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

          <h1>Poke-Battlegrounds</h1>

          <div className="battle-grid">
            <div>
            <h3>Trainer 1: {this.props.team1[this.state.team1Idx].name}</h3>
            <Progress percent={this.state.team1pokemonHP} indicating />
            </div>
            <Transition animation={'shake'} duration={500} visible={this.state.visible}>
              <img className='team1' src={this.props.team1[this.state.team1Idx].frontURL} />
            </Transition>
            <Transition animation={'shake'} duration={500} visible={this.state.visible1}>
              <img className='team2' src={this.props.team2[this.state.team2Idx].backURL} />
            </Transition>
            <div>
              <h3>Trainer 2: {this.props.team2[this.state.team2Idx].name}</h3>
              <Progress percent={this.state.team2pokemonHP} indicating />
              <div className='battle-grid'>
              <MoveContainer
                team1={this.props.team1}
                team2={this.props.team2}
                toggle={this.state.toggle}
                team1Idx={this.state.team1Idx}
                team2Idx={this.state.team2Idx}
                audio={audio}
                audio2={audio2}
                handleClick={this.handleClick}
                team1pokemonHP={this.state.team1pokemonHP}
                team2pokemonHP={this.state.team2pokemonHP}
              />
              </div>
            </div>

          </div>


        </div>
    )
  }

}

export default Battlegrounds
