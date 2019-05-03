import React from 'react'
import PokeCard from './PokeCard'
import SelectContainer from './SelectContainer'


class Player1Select extends React.Component {
  renderPoke = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokeCard player={'p1'} pokemon={pokemon} handleSelect={this.props.handleSelect}/>
    })
  }

  renderContainer = () => {
    return this.props.team.map(pokemon => {
      return <SelectContainer pokemon={pokemon} />
    })
  }

  render() {
    return (
      <div>
        {this.renderContainer()}
        <button onClick={() => this.props.handlePages('index')}>New Battle</button>
        <button onClick={() => this.props.handlePages('p2')}>P2 Select</button>
        {this.renderPoke()}
      </div>
    )
  }
}

export default Player1Select
