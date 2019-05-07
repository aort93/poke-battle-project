import React from 'react'

class MoveContainer extends React.Component {
  render() {

    console.log(this.props.team1[this.props.team1Idx])
    return (
      <div>
        {this.props.toggle ?
          <React.Fragment>
          <h2>Trainer's 1 ({this.props.team1[this.props.team1Idx].name}) Turn</h2>
          <div className='move-container'>
            <button id='move1' class="ui button" onClick={() => this.props.handleClick(0)}>{this.props.team1[this.props.team1Idx].moves[0].name}</button>

            <button id='move2' class="ui button" onClick={() => this.props.handleClick(1)}>{this.props.team1[this.props.team1Idx].moves[1].name}</button>

            <button id='move3' class="ui button" onClick={() => this.props.handleClick(2)}>{this.props.team1[this.props.team1Idx].moves[2].name}</button>

            <button id='move4' class="ui button" onClick={() => this.props.handleClick(3)}>{this.props.team1[this.props.team1Idx].moves[3].name}</button>
          </div>
          </React.Fragment>
        :
        <React.Fragment>
          <h2>Trainer's 2 ({this.props.team2[this.props.team2Idx].name}) Turn</h2>
          <div className='move-container'>

            <button id='move1' class="ui button" onClick={() => this.props.handleClick(0)}>{this.props.team2[this.props.team2Idx].moves[0].name}</button>

            <button id='move2' class="ui button" onClick={() => this.props.handleClick(1)}>{this.props.team2[this.props.team2Idx].moves[1].name}</button>

            <button id='move3' class="ui button" onClick={() => this.props.handleClick(2)}>{this.props.team2[this.props.team2Idx].moves[2].name}</button>

            <button id='move4' class="ui button" onClick={() => this.props.handleClick(3)}>{this.props.team2[this.props.team2Idx].moves[3].name}</button>
          </div>
          </React.Fragment>
        }
      </div>
    )
  }
}

export default MoveContainer
