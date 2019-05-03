import React from 'react'
import PokeCard from './PokeCard'
import SelectContainer from './SelectContainer'
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
        {this.renderContainer()}
        <button onClick={() => this.props.handlePages('index')}>New Battle</button>
        <button onClick={() => this.props.handlePages('p1')}>P1 Select</button>
        { this.props.team.length === 1 ? <button onClick={() => this.props.handlePages('battle')}>Battle!</button> : null }
        {this.renderPoke()}
      </div>
    )
  }
}

export default Player2Select
