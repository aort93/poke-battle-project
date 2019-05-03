import React from 'react'
import PokeCard from './PokeCard'
import SelectContainer from './SelectContainer'


class Player2Select extends React.Component {
  renderPoke = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokeCard player={'p2'} pokemon={pokemon} handleSelect={this.props.handleSelect}/>
    })
  }

  renderContainer = () => {
    return this.props.team.map(pokemon => {
      return <SelectContainer pokemon={pokemon}
      handleRemoveFromTeam={this.props.handleRemoveFromTeam}
              />
    })
  }


  render() {
    return (
      <div>
        {this.renderContainer()}
        <button onClick={() => this.props.handlePages('index')}>New Battle</button>
        <button onClick={() => this.props.handlePages('p1')}>P1 Select</button>
        {this.renderPoke()}
      </div>
    )
  }
}

export default Player2Select
