import React from 'react'

class MoveContainer extends React.Component {
  render() {

    console.log(this.props.team1[this.props.team1Idx])
    return (
      <div>
        {this.props.toggle ?
          <div>
            <p1 id='move1' onClick={() => this.props.handleClick(0)}>{this.props.team1[this.props.team1Idx].moves[0].name}</p1>
            <br/>
            <p2 id='move2' onClick={() => this.props.handleClick(1)}>{this.props.team1[this.props.team1Idx].moves[1].name}</p2>
            <br/>
            <p3 id='move3' onClick={() => this.props.handleClick(2)}>{this.props.team1[this.props.team1Idx].moves[2].name}</p3>
            <br/>
            <p4 id='move4' onClick={() => this.props.handleClick(3)}>{this.props.team1[this.props.team1Idx].moves[3].name}</p4>
            <br/>
            <p5 id='hp'>{this.props.team1pokemonHP}</p5>
          </div>
        :
          <div>
            <p1 id='move1' onClick={() => this.props.handleClick(0)}>{this.props.team2[this.props.team2Idx].moves[0].name}</p1>
            <br/>
            <p2 id='move2' onClick={() => this.props.handleClick(1)}>{this.props.team2[this.props.team2Idx].moves[1].name}</p2>
            <br/>
            <p3 id='move3' onClick={() => this.props.handleClick(2)}>{this.props.team2[this.props.team2Idx].moves[2].name}</p3>
            <br/>
            <p4 id='move4' onClick={() => this.props.handleClick(3)}>{this.props.team2[this.props.team2Idx].moves[3].name}</p4>
            <br/>
            <p5 id='hp'>{hp}</p5>
          </div>
      </div>
    )
  }
}

export default MoveContainer
