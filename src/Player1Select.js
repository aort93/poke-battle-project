import React from 'react'
import PokeCard from './PokeCard'
import SelectContainer from './SelectContainer'
import { Card } from 'semantic-ui-react'
import v4 from 'uuid'
import { StickyContainer, Sticky } from 'react-sticky'


class Player1Select extends React.Component {

  renderPoke = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokeCard player={'p1'} key={ v4() } pokemon={pokemon} handleSelect={this.props.handleSelect} />
    })
  }


  renderContainer = () => {
    return this.props.team.map(pokemon => {
        return <SelectContainer key={v4()} pokemon={pokemon} handleRemoveFromTeam={this.props.handleRemoveFromTeam}/>
      })
    }


  render() {
    return (
      <div id="player1page">
        <h1>Trainer 1</h1>
        <h3>Choose your six pokemon</h3>
          <div className="team1sticky">
              <h2>Team</h2>
              <Card.Group itemsPerRow={6}>{this.renderContainer()}</Card.Group>
          </div>
          <br/>
          <button class="ui button" onClick={() => this.props.handlePages('index')}>Restart</button>
          { this.props.team.length === 6 ? <button class="ui button" onClick={() => this.props.handlePages('p2')}>P2 Select</button> : null }
          <h1>Pokemons</h1>
          <Card.Group itemsPerRow={5}>{this.renderPoke()}</Card.Group>
      </div>
    )
  }
}

export default Player1Select
