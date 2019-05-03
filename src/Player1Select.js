import React from 'react'
import PokeCard from './PokeCard'
import SelectContainer from './SelectContainer'


class Player1Select extends React.Component {

  renderPoke = () => {
    return this.props.pokemons.map(pokemon => {
      return <PokeCard player={'p1'} pokemon={pokemon} handleSelect={this.props.handleSelect} />
    })
  }

  // master = () => {
  //   while(this.state.count <= 6) {
  //     return this.renderContainer()
  //   }
  // }
  //
  // increaseCount = () => {
  //   this.setState(prevState => ({
  //     count: prevState.count + 1
  //   }))
  // }

  renderContainer = () => {
    return this.props.team.map(pokemon => {
        return <SelectContainer pokemon={pokemon} handleRemoveFromTeam={this.props.handleRemoveFromTeam}/>
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
