import React from 'react'

class MoveContainer extends React.Component {
  render() {

    let poke, idx, hp;
    if (this.props.toggle) {
      poke = this.props.team1
      idx = this.props.team1Idx
      hp = this.props.team1pokemonHP
    } else {
      poke = this.props.team2
      idx = this.props.team2Idx
      hp = this.props.team2pokemonHP
    }

    return (
      <div>
          <div onClick={this.props.handleClick}>
            <p1 id='move1'>{poke[idx].move.name}</p1>
            <br/>
            <p2 id='move2'>Water</p2>
            <br/>
            <p3 id='move3'>Air</p3>
            <br/>
            <p4 id='move4'>Earth</p4>
            <br/>
            <p5 id='hp'>{hp}</p5>
          </div>
      </div>
    )
  }
}

export default MoveContainer
