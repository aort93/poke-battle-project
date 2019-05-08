import React from 'react'
import PokeCard from './PokeCard'
import SelectContainer from './SelectContainer'
import { Card } from 'semantic-ui-react'
import v4 from 'uuid'



class Player2Select extends React.Component {
  renderPoke = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokeCard key={ v4() } player={'p2'} pokemon={pokemon} handleSelect={this.props.handleSelect}/>
    })
  }

  renderContainer = () => {
    return this.props.team.map(pokemon => {
      return <SelectContainer key={ v4() } pokemon={pokemon}
                handleRemoveFromTeam={this.props.handleRemoveFromTeam}
              />
    })
  }


  render() {
    return (
      <div>
        <h1>Trainer 2</h1>
        <h3>Choose your six pokemon</h3>
        <h2>Team</h2>
        <Card.Group itemsPerRow={6}>{this.renderContainer()}</Card.Group>
        <br/>
        <button class="ui button" onClick={() => this.props.handlePages('index')}>Restart</button>
        <button class="ui button" onClick={() => this.props.handlePages('p1')}>P1 Select</button>
        { this.props.team.length === 6 ? <button class="ui button" onClick={() => this.props.handlePages('battle')}>Battle!</button> : null }
        <h1>Pokemons</h1>
        <Card.Group itemsPerRow={5}>{this.renderPoke()}</Card.Group>
      </div>
    )
  }
}

export default Player2Select
